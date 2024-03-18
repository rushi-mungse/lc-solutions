import { GiAmericanShield } from "react-icons/gi";
import { SiThealgorithms } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbBrandSpeedtest } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrDocumentPerformance } from "react-icons/gr";
import { SlFire } from "react-icons/sl";
import { BiCalendarWeek } from "react-icons/bi";

type FeatureType = {
  title: string;
  description: string;
  src: string;
  borderGradient: boolean;
  icon: React.ReactNode;
};

export const features: FeatureType[] = [
  {
    title: "Problem Breakdowns",
    description:
      "Each post begins with a thorough breakdown of the problem statement. We dissect the requirements, constraints, and any edge cases you need to consider before diving into the solution.",
    src: "/assets/problem-brekdown.png",
    borderGradient: true,
    icon: <GiAmericanShield className="size-16 text-yellow-500" />,
  },

  {
    title: "Algorithm Design",
    description:
      "We explore various approaches to solving the problem, discussing the pros and cons of each. Whether it's brute force, greedy algorithms, dynamic programming, or any other technique, we provide insights into selecting the most appropriate strategy.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <SiThealgorithms className="size-16 text-blue-500" />,
  },

  {
    title: "Code Implementation",
    description:
      "Step-by-step, we translate the chosen algorithm into code. Our explanations are beginner-friendly yet detailed enough to benefit even seasoned developers. We emphasize readability, efficiency, and best coding practices.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <FaCode className="size-16 text-pink-500" />,
  },

  {
    title: "Complexity Analysis",
    description:
      "Understanding the time and space complexity of your solution is crucial for optimizing performance. We analyze the computational complexity of each algorithm to help you assess its efficiency.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <SiGoogleanalytics className="size-16 text-red-500" />,
  },

  {
    title: "Test Cases and Validation",
    description:
      "We don't just stop at writing code; we also discuss test cases to validate our solution. Verifying correctness across various inputs ensures the robustness of your code.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <TbBrandSpeedtest className="size-16 text-green-500" />,
  },

  {
    title: "Alternative Solutions",
    description:
      "Beyond the primary solution, we often explore alternative approaches, discussing trade-offs and scenarios where they might be more suitable.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <MdAlternateEmail className="size-16 text-sky-500" />,
  },

  {
    title: "Tips and Tricks",
    description:
      "Throughout our posts, we share useful tips, tricks, and common pitfalls to watch out for. These insights can help sharpen your problem-solving skills and make you a more proficient coder.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <MdOutlineTipsAndUpdates className="size-16 text-yellow-500" />,
  },

  {
    title: "Interactive Community",
    description:
      "We encourage interaction! Feel free to leave comments, questions, or suggestions on our posts. Engaging with our community fosters collaboration and collective learning.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <HiMiniUserGroup className="size-16 text-white-500" />,
  },

  {
    title: "Performance Analysis",
    description:
      "Understanding the time and space complexity of your solution is critical in competitive programming. We analyze the computational complexity of each algorithm, helping you assess its efficiency and suitability for competitive environments.",
    src: "/assets/tv.png",
    borderGradient: false,
    icon: <GrDocumentPerformance className="size-16 text-purple-500" />,
  },
];

export const dailyQuestion = {
  icon: <SlFire className="size-16 text-yellow-500" />,
  title: "Leetcode Daily Question Solution",
  description: "452. Minimum Number of Arrows to Burst Balloons",
  buttonHref: "/problems/minimum-number-of-arrows-to-burst-balloons",
  buttonTitle: "Read Solution",
};

export const contest = {
  icon: <BiCalendarWeek className="size-16 text-green-500" />,
  title: "Leetcode Contest Solutions",
  description:
    "LeetCode contests, providing comprehensive solutions and in-depth explanations",
  buttonHref: "/contest",
  buttonTitle: "Check Out",
};
