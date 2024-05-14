import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList, css.flex)}>
      {friends.map((el) => {
        return (
          <li key={el.id} className={clsx(css.friendItem, css.flex)}>
            <FriendListItem
              name={el.name}
              isOnline={el.isOnline}
              avatar={el.avatar}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
