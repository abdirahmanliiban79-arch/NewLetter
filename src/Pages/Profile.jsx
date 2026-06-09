import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext"; // Hubi in jidka (path) uu sax yahay

const Profile = () => {
  const { user, profile, loading } = useAuth();

  // State-yada lagu maareeyo foomka kor ku xusan
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Marka xogta qofka la soo helo, ku shub foomka dhexdiisa
  useEffect(() => {
    if (profile) {
      setUsername(profile.username || "");
    }
    if (user) {
      setEmail(user.email || "");
    }
  }, [user, profile]);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Halkaan mustaqbalka waxaad dhigi kartaa koodka Supabase ee xogta wax ka badala
    console.log("Saving changes:", { username });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 font-medium">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4 font-sans selection:bg-orange-200">
      {/* Container-ka Weyn ee Card-ka */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden mb-8">
        {/* Qaybta Sare ee Midabka Orange-ka ah lehna Sawirka */}
        <div className="bg-rose-500 h-48 relative flex flex-col items-center justify-end pb-4">
          {/* Sawirka Profile-ka ee Wareegga ah */}
          <div className="absolute top-24 w-32 h-32 rounded-full border-4 border-white bg-gray-200 shadow-md overflow-hidden flex items-center justify-center">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              // Sawir ku-meel-gaar ah (Placeholder) oo u eg sawirkaaga shaashadda
              <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white font-bold text-2xl tracking-wider">
                {username ? username.slice(0, 2).toUpperCase() : "DV"}
              </div>
            )}

            {/* Kamirada yar ee Sawirka lagu badalo (Camera Icon Button) */}
            {/* <button
              type="button"
              className="absolute bottom-0 right-2 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#E65F2B"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </button> */}

            {/* Profile changing button  */}

          </div>
        </div>

        {/* Magaca iyo Iimaylka Qoraal ahaan hoos mara sawirka */}
        <div className="text-center mt-14 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {username || "User"}
          </h2>
          <p className="text-amber-600 font-medium text-sm mt-0.5">{email}</p>
        </div>

        {/* Foomka Xogta (Form Inputs) */}
        <form
          onSubmit={handleSaveChanges}
          className="px-8 pb-8 md:px-12 space-y-6"
        >
          <hr className="border-gray-100 my-4" />

          {/* Input-ka Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Username
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7 0 3.75 3.75 0 0 1 7 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                placeholder="mcdev"
                required
              />
            </div>
          </div>

          {/* Input-ka Email (Waa Read-Only si la mid ah sawirkaaga) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Email
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                disabled
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed select-none"
                placeholder="mchamuuda@gmail.com"
              />
            </div>
          </div>

          <hr className="border-gray-100 pt-2" />

          {/* Badhamada Hoose (Buttons) */}
          <div className="flex items-center justify-between pt-2">
            {/* Button-ka Bedelaada Password-ka */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 13.5h13.5c1.035 0 1.875-.84 1.875-1.875V11.625c0-1.035-.84-1.875-1.875-1.875H5.25c-1.035 0-1.875.84-1.875 1.875v10.5c0 1.035.84 1.875 1.875 1.875Z"
                />
              </svg>
              Change Password
            </button>

            {/* Button-ka Save Changes */}
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
