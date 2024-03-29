import { MdOutlineBreakfastDining, MdOutlinePark } from "react-icons/md";
import { BiDrink, BiMusic, BiVolumeMute } from "react-icons/bi";
import { RiMoonClearLine } from "react-icons/ri";
import { GiChariot } from "react-icons/gi";
import {
  GiFoodTruck,
  GiMicrophone,
  GiPartyFlags,
  GiRing,
} from "react-icons/gi";

const timelineItems = [
  {
    time: "12 Noon",
    description: <>Arrival at Oakland Gardens (The River School Droitwich)</>,
    icon: <MdOutlinePark />,
  },
  {
    time: "12.30pm",
    description: <>Ceremony</>,
    icon: <GiRing />,
  },
  {
    time: "1pm",
    description: <>Reception Drinks</>,
    icon: <BiDrink />,
  },
  {
    time: "2pm",
    description: <>Wedding Breakfast</>,
    icon: <MdOutlineBreakfastDining />,
  },
  {
    time: "3.30pm",
    description: <>Music &amp; Games</>,
    icon: <BiMusic />,
  },
  {
    time: "7pm",
    description: <>Communal Singalong</>,
    icon: <GiMicrophone />,
  },
  {
    time: "7.30pm",
    description: <>Street Food</>,
    icon: <GiFoodTruck />,
  },
  {
    time: "8.30pm",
    description: <>Party time in the Tipi (with Ellie Jones and the Giants)</>,
    icon: <GiPartyFlags />,
  },
  {
    time: "11.30pm",
    description: <>Music Ends</>,
    icon: <BiVolumeMute />,
  },
  {
    time: "11.45pm",
    description: <>Chariots &amp; Taxis</>,
    icon: <GiChariot />,
  },
  {
    time: "12 Midnight",
    description: <>Venue Closes</>,
    icon: <RiMoonClearLine />,
  },
];

export default timelineItems;
