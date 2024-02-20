import { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../../router";

const UserInfo: FC = () => {
  return (
    <>
      <Link style={{ color: "#fff" }} to={LOGIN_PATHNAME}>
        登录
      </Link>
    </>
  );
};

export default UserInfo;
