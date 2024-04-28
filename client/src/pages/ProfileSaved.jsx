import { Savedpost } from "../components";
import { useProfileContext } from "../layout/ProfileLayout";
import { NoPost } from "../components";

const ProfileSaved = () => {
  const { savedpost } = useProfileContext();
  return (
    <>
      {savedpost.length === 0 ? (
        <NoPost index={1} />
      ) : (
        <Savedpost data={savedpost} />
      )}
    </>
  );
};

export default ProfileSaved;
