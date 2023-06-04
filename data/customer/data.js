import img1 from "../../assets/images/users/1.jpg";
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img4 from "../../assets/images/users/4.jpg";
import img5 from "../../assets/images/users/5.jpg";

const Customers = [
  {
    id: 1,
    imgsrc: img4,
    name: "Nirav Joshi-9",
    email: "nirav@gmail.com",
    pname: "Hosting Press HTML",
    teams: [
      {
        color: ( theme ) => theme.palette.primary.main,
        text: "Y",
      },
      {
        color: ( theme ) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Active",
    weeks: "40",
    budget: "2.4",
  },
  {
    id: 2,
    imgsrc: img1,
    name: "Sunil Joshi-8",
    email: "sunil@gmail.com",
    pname: "Elite Admin",
    teams: [
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "S",
      },
      {
        color: ( theme ) => theme.palette.error.main,
        text: "D",
      },
    ],
    status: "Active",
    weeks: "11",
    budget: "3.9",
  },
  {
    id: 3,
    imgsrc: img2,
    name: "Andrew McDown-7",
    email: "andrew@gmail.com",
    pname: "Real Homes WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.primary.main,
        text: "A",
      },
      {
        color: ( theme ) => theme.palette.success.main,
        text: "X",
      },
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "N",
      },
    ],
    status: "Pending",
    weeks: "19",
    budget: "24.5",
  },
  {
    id: 4,
    imgsrc: img3,
    name: "Christo Jamil-6",
    email: "jamil@gmail.com",
    pname: "MedicalPro WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Completed",
    weeks: "30",
    budget: "12.8",
  },

  {
    id: 5,
    imgsrc: img5,
    name: "Micheal Doe-5",
    email: "micheal@gmail.com",
    pname: "Helping Hands WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "S",
      },
    ],
    status: "Cancel",
    weeks: "1",
    budget: "9.3",
  },
  {
    id: 6,
    imgsrc: img4,
    name: "Nirav Joshi-4",
    email: "nirav@gmail.com",
    pname: "Hosting Press HTML",
    teams: [
      {
        color: ( theme ) => theme.palette.primary.main,
        text: "Y",
      },
      {
        color: ( theme ) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Active",
    weeks: "16",
    budget: "2.4",
  },
  {
    id: 7,
    imgsrc: img1,
    name: "Sunil Joshi-3",
    email: "sunil@gmail.com",
    pname: "Elite Admin",
    teams: [
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "S",
      },
      {
        color: ( theme ) => theme.palette.error.main,
        text: "D",
      },
    ],
    status: "Active",
    weeks: "12",
    budget: "3.9",
  },
  {
    id: 8,
    imgsrc: img2,
    name: "Andrew McDownland-2",
    email: "andrew@gmail.com",
    pname: "Real Homes WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.primary.main,
        text: "A",
      },
      {
        color: ( theme ) => theme.palette.warning.main,
        text: "X",
      },
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "N",
      },
    ],
    status: "Pending",
    weeks: "14",
    budget: "24.5",
  },
  {
    id: 9,
    imgsrc: img3,
    name: "Christopher Jamil-1",
    email: "jamil@gmail.com",
    pname: "MedicalPro WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Completed",
    weeks: "12",
    budget: "12.8",
  },

  {
    id: 10,
    imgsrc: img5,
    name: "Micheal Doe-1",
    email: "micheal@gmail.com",
    pname: "Helping Hands WP Theme",
    teams: [
      {
        color: ( theme ) => theme.palette.secondary.main,
        text: "S",
      },
    ],
    status: "Cancel",
    weeks: "9",
    budget: "9.3",
  },
];

export default Customers;
