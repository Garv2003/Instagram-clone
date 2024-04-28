import { Savedpost } from "../components";
import { useProfileContext } from "../layout/ProfileLayout";
import { NoPost } from "../components";

const ProfileReels = () => {
  const { reels } = useProfileContext();
  return (
    <>
      {reels.length === 0 ? <NoPost index={2} /> : <Savedpost data={reels} />}
    </>
  );
};

export default ProfileReels;
