import { Icon } from "../utils/iconutitls";

const SettingItems = [
  {
    title: "How you used Instagram",
    subitems: [
      {
        icon: <Icon name="IoBookmarkOutline" />,
        subitem: "Saved",
      },
      {
        icon: <Icon name="MdRestore" />,
        subitem: "Archive",
      },
      {
        icon: <Icon name="MdRestore" />,
        subitem: "Your activity",
      },
      {
        icon: <Icon name="BsFillStarFill" />,
        subitem: "Close friends",
      },
      {
        icon: <Icon name="FaBell" />,
        subitem: "Notifications",
      },
      {
        icon: <Icon name="RxTimer" />,
        subitem: "Time Spent",
      },
    ],
  },
  {
    title: "What you use",
    subitems: [
      {
        icon: <Icon name="IoStarOutline" />,
        subitem: "Favourities",
      },
      {
        icon: <Icon name="FaBellSlash" />,
        subitem: "Muted accounts",
      },
      {
        icon: <Icon name="FaPhotoFilm" />,
        subitem: "Suggested content",
      },
      {
        icon: <Icon name="LuHeartOff" />,
        subitem: "Like and share counts",
      },
    ],
  },
  {
    title: "Who can see your content",
    subitems: [
      {
        icon: <Icon name="FaLock" />,
        subitem: "Account privacy",
      },
      {
        icon: <Icon name="MdBlockFlipped" />,
        subitem: "Blocked",
      },
      {
        icon: <Icon name="MdHideSource" />,
        subitem: "Hide story and live",
      },
    ],
  },
  {
    title: "How others can interact with you",
    subitems: [
      {
        icon: <Icon name="RiMessengerLine" />,
        subitem: "Messages and story replies",
      },
      {
        icon: <Icon name="TiTag" />,
        subitem: "Tags and mentions",
      },
      {
        icon: <Icon name="FaRegComment" />,
        subitem: "Comments",
      },
      {
        icon: <Icon name="IoMdShare" />,
        subitem: "Sharing",
      },
      {
        icon: <Icon name="MdBlockFlipped" />,
        subitem: "Restricted",
      },
      {
        icon: <Icon name="BsExclamationCircle" />,
        subitem: "Limited interactions",
      },
      {
        icon: <Icon name="MdHideSource" />,
        subitem: "Hidden words",
      },
      {
        icon: <Icon name="IoPersonAddOutline" />,
        subitem: "Follow and invite friends",
      },
    ],
  },
  {
    title: "Your app and media",
    subitems: [
      {
        icon: <Icon name="HiOutlineDevicePhoneMobile" />,
        subitem: "Device permissions",
      },
      {
        icon: <Icon name="MdFileDownload" />,
        subitem: "Archiving and downloading",
      },
      {
        icon: <Icon name="BsUniversalAccessCircle" />,
        subitem: "Accessibility",
      },
      {
        icon: <Icon name="IoLanguage" />,
        subitem: "Language",
      },
      {
        icon: <Icon name="HiChartBar" />,
        subitem: "Data usage and media quality",
      },
      {
        icon: <Icon name="IoLaptopOutline" />,
        subitem: "Website permissions",
      },
    ],
  },
  {
    title: "For families",
    subitems: [
      {
        icon: <Icon name="GoPerson" />,
        subitem: "Supervision",
      },
    ],
  },
  {
    title: "For professionals",
    subitems: [
      {
        icon: <Icon name="BsFileBarGraphFill" />,
        subitem: "Account type and tools",
      },
    ],
  },
  {
    title: "More info and support",
    subitems: [
      {
        icon: <Icon name="FiHelpCircle" />,
        subitem: "Help",
      },
      {
        icon: <Icon name="GoPerson" />,
        subitem: "Account Status",
      },
      {
        icon: <Icon name="FcAbout" />,
        subitem: "About",
      },
    ],
  },
];

export { SettingItems };
