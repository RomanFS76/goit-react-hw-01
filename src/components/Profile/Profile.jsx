import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.containerProfile}>
      <div>
        <img className={css.imgProfile} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={clsx(css.statsList, css.flex)}>
        <li className={clsx(css.statsItem, css.flex)}>
          <span className={css.statsTitle}>followers</span>
          <span className={css.followers}>{followers}</span>
        </li>
        <li className={clsx(css.statsItem, css.flex)}>
          <span className={css.statsTitle}>views</span>
          <span className={css.views}>{views}</span>
        </li>
        <li className={clsx(css.statsItem, css.flex)}>
          <span className={css.statsTitle}>likes</span>
          <span className={css.likes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
