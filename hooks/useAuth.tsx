import { IOS_CLIENT_ID_PROD, WEB_CLIENT_ID } from "@env";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>({});

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  webClientId: `${WEB_CLIENT_ID}`, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: "", // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: "", // [Android] specifies an account name on the device that should be used
  iosClientId: `${IOS_CLIENT_ID_PROD}`, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUser(user as any);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        setLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        setLoading(true);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        setLoading(false);
      } else {
        // some other error happened
        setLoading(false);
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
