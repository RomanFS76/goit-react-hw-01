import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.wrapperCard}>
      <img className={css.imgAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.isOnline,
          isOnline === true ? css.online : css.offline
        )}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
