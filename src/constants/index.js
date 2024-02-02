import { arrowDown, arrowRight, instagram, twitter } from "../assets/icons"
import {
  picture_1,
  picture_2,
  picture_3,
  digit_1,
  digit_2,
  digit_3,
} from "../assets/images"
export const navLinks = [
  { href: "#equipments", label: "Equipment" },
  { href: "#about-us", label: "About Us" },
  { href: "#blog", label: "Blog" },
]
export const menuNavLinks = [
  { href: "#equipments", label: "Equipment" },
  { href: "#about-us", label: "About Us" },
  { href: "#blog", label: "Blog" },
  { href: "#account", label: "Account" },
]

export const followLink = [
  {
    follow: "Follow us",
    instagram,
    twitter,
  },
]
export const startLink = [
  {
    start: "Start",
    one: "01",
    two: "02",
    three: "03",
    empty: "",
  },
]

export const welcomeSection = [
  {
    title: "A Hiking guide",
    subtitle: "Be prepared for the Mountains and beyond!",
    scroll: "scroll down",
    arrowDown,
  },
]

export const blogs = [
  {
    id: "one",
    digit: digit_1,
    title: "Get Started",
    subtitle: "What level of  hiker are you?",
    text: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker",
    readmore: "read more",
    arrowRight,
    image: picture_1,
  },
  {
    id: "two",
    digit: digit_2,
    title: "Hiking Essentials",
    subtitle: "Picking the right Hiking Gear!",
    text: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    readmore: "read more",
    arrowRight,
    image: picture_2,
  },
  {
    id: "three",
    digit: digit_3,
    title: "where you go is the key",
    subtitle: "Understand Your Map & Timing",
    text: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
    readmore: "read more",
    arrowRight,
    image: picture_3,
  },
]
export const footerLinks = [
  {
    title: "More on The Blog",
    links: [
      { name: "About MNTN", link: "/" },
      { name: "Contributors & Writers", link: "/" },
      { name: "Write For Us", link: "/" },
      { name: "Contact Us", link: "/" },
      { name: "Privacy Policy", link: "/" },
    ],
  },
  {
    title: "More on MNTN",
    links: [
      { name: "The Team", link: "/" },
      { name: "Jobs", link: "/" },
      { name: "Press", link: "/" },
    ],
  },
]
