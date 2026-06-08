import supabase from "./supabase";

export async function Signup(email, password, username = '') {
  let { data,error } = await supabase.auth.signUp({
      email: email,
      password: password
  });
  if(error) throw error

  if(data?.user){
    const { data : sessionData } = await supabase.auth.getSession();
    if(!sessionData?.session){
    return data
    }
  

  const displayName = username || email.split('@')[0];

  const { data : profileData, error : profileError } = await supabase.from('users').insert({
    id: data.user.id,
    username: displayName,
    avatar_url: null,
  });
  if(profileError){
    console.error('Error creating user profile:', profileError);
  }else{
    console.log('User profile created successfully:', profileData);
  }

  }
  return data
  
}

export async function Signin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if(error) throw error

   if (data?.user) {
     try {
       const profile = await getUserProfile(data.user.id);
       console.log("profile info ", profile);
     } catch (profileError) {
       console.error("Error with profile during signin:", profileError);
     }
   }
  return data
}

export async function getUserProfile(userId) {
  const { data: sessionData } = await supabase.auth.getSession();
  const {data : userData, error} = await supabase.from('users')
  .select('*')
  .eq('id', userId)
  .single();

  if(error && error.code === 'PGRST116'){
    console.log('No Profile found. attempting to create one for user :', userId)

    // get user email to drive username if needed

    const email = userData?.email;
    const defualtUsername = email ? email?.split('@')[0] : `user_${Date.now()}`;
    // create a profile for user
     
    const { data: newProfile, error: newProfileError } = await supabase
      .from("users")
      .insert({
        id: userId,
        username: defualtUsername,
        avatar_url: null,
      })
      .select()
      .single();
    
    

    if(newProfileError){
      console.error('Error creating user profile:', newProfileError);
    }else{
      console.log('User profile created successfully:', newProfile);
    }
    return newProfile
  }

  // general error
  if(error){
    console.error('Error fetching user profile:', error);
    throw error
  }
  return userData
}


export function onAuthChange (callback){
  const { data } = supabase.auth.onAuthStateChange(
    async (event, session) => {
    callback(event, session?.user || null)
  })

  return ()=> data.subscription.unsubscribe();
}

// export async function SignOut() {
//   await supabase.auth.signOut();
// }