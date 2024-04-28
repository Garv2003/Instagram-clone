import { Savedpost } from "../components";
import { useProfileContext } from "../layout/ProfileLayout";
import { NoPost } from "../components";

const Profile = () => {
  const { data } = useProfileContext();
  return <>{data.length ? <Savedpost data={data} /> : <NoPost index={0} />}</>;
};

export default Profile;
