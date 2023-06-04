const Menuitems = [
  {
    navlabel: true,
    subheader: "DASHBOARDS",
    icon: "mdi mdi-dots-horizontal",
    href: "Dashboard",
  },
  {
    title: "Analytical",
    icon: "pie-chart",
    href: "/dashboards/dashboard1",
  },
  {
    title: "eCommerce",
    icon: "shopping-bag",
    href: "/dashboards/dashboard2",
  },
  {
    title: "Modern",
    icon: "hard-drive",
    href: "/dashboards/dashboard3",
  },

  {
    navlabel: true,
    subheader: "APPS",
    icon: "mdi mdi-dots-horizontal",
    href: "Apps",
  },
  {
    title: "Chat",
    icon: "message-square",
    href: "/apps/chats",
  },
  {
    title: "Notes",
    icon: "clipboard",
    href: "/apps/notes",
  },
  {
    title: "Mail",
    icon: "inbox",
    href: "/apps/email",
  },

  {
    title: "Calendar",
    icon: "calendar",
    href: "/apps/calendar",
  },

  {
    title: "Customers",
    icon: "users",
    href: "/apps/customers",
    collapse: true,
    children: [
      {
        title: "Lists",
        icon: "list",
        href: "/apps/customers/list",
      },
      {
        title: "Edit",
        icon: "edit",
        href: "/apps/customers/edit",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "PAGES",
    icon: "mdi mdi-dots-horizontal",
    href: "Pages",
  },
  {
    title: "Shop",
    icon: "shopping-cart",
    href: "/shop",
    collapse: true,
    children: [
      {
        title: "Listing",
        icon: "list",
        href: "/shop/list",
      },
      {
        title: "Detail",
        icon: "file-text",
        href: "/shop/detail",
      },
    ],
  },
  {
    title: "Alert",
    icon: "alert-circle",
    href: "/alert",
  },
  {
    title: "User Profile",
    icon: "user",
    href: "/user-profile",
  },
  {
    title: "Quill Editor",
    icon: "edit",
    href: "/quill-editor",
  },
  {
    title: "Treeview",
    icon: "git-pull-request",
    href: "/treeview",
  },
  {
    title: "Pricing",
    icon: "dollar-sign",
    href: "/pricing",
  },
  {
    title: "Typography",
    icon: "type",
    href: "/typography",
  },
  {
    title: "Feather Icons",
    icon: "feather",
    href: "/feather-icons",
  },
  {
    title: "Timeline",
    icon: "clock",
    href: "/timeline",
  },

  {
    navlabel: true,
    subheader: "FORMS",
    icon: "mdi mdi-dots-horizontal",
    href: "Form",
  },
  {
    title: "Form Elements",
    icon: "box",
    href: "/forms/form-elements",
    collapse: true,
    children: [
      {
        title: "Autocomplete",
        icon: "compass",
        href: "/forms/form-elements/autocomplete",
      },
      {
        title: "Buttons",
        icon: "codepen",
        href: "/forms/form-elements/button",
      },
      {
        title: "Checkbox",
        icon: "check-square",
        href: "/forms/form-elements/checkbox",
      },
      {
        title: "Radio",
        icon: "check-circle",
        href: "/forms/form-elements/radio",
      },
      {
        title: "Date Time",
        icon: "calendar",
        href: "/forms/form-elements/date-time",
      },
      {
        title: "Slider",
        icon: "git-commit",
        href: "/forms/form-elements/slider",
      },
      {
        title: "Switch",
        icon: "toggle-left",
        href: "/forms/form-elements/switch",
      },
      {
        title: "Rating",
        icon: "star",
        href: "/forms/form-elements/rating",
      },
      {
        title: "Pagination",
        icon: "toggle-left",
        href: "/forms/form-elements/pagination",
      },
    ],
  },
  {
    title: "Form Layout",
    icon: "file-text",
    href: "/forms/form-layouts",
  },
  {
    title: "Form Custom",
    icon: "file-plus",
    href: "/forms/form-custom",
  },
  {
    title: "Form Wizard",
    icon: "codepen",
    href: "/forms/form-wizard",
  },
  {
    navlabel: true,
    subheader: "TABLES",
    icon: "mdi mdi-dots-horizontal",
    href: "Table",
  },
  {
    title: "Tables",
    icon: "layout",
    href: "/tables",
    collapse: true,
    children: [
      {
        title: "Basic Table",
        icon: "disc",
        href: "/tables/basic",
      },
      {
        title: "Pagination Table",
        icon: "disc",
        href: "/tables/pagination",
      },
      {
        title: "Enhanced Table",
        icon: "disc",
        href: "/tables/enhanced",
      },
      {
        title: "Collapsible Table",
        icon: "disc",
        href: "/tables/collapsible",
      },
      {
        title: "Fixed Header Table",
        icon: "disc",
        href: "/tables/fixed-header",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "WIDGETS",
    icon: "mdi mdi-dots-horizontal",
    href: "Widgets",
  },
  {
    title: "Widget Feed",
    icon: "archive",
    href: "/widgets/feed",
  },

  {
    title: "Widget Apps",
    icon: "grid",
    href: "/widgets/apps",
  },
  {
    navlabel: true,
    subheader: "CHARTS",
    icon: "mdi mdi-dots-horizontal",
    href: "Chart",
  },
  {
    title: "Line Chart",
    icon: "activity",
    href: "/charts/line",
  },
  {
    title: "Gredient Chart",
    icon: "bar-chart",
    href: "/charts/gredient",
  },
  {
    title: "Doughnut & Pie",
    icon: "bar-chart-2",
    href: "/charts/doughnut",
  },
  {
    title: "Area Chart",
    icon: "aperture",
    href: "/charts/area",
  },
  {
    title: "Column Chart",
    icon: "circle",
    href: "/charts/column",
  },
  {
    title: "Candlestick Chart",
    icon: "loader",
    href: "/charts/candlestick",
  },
  {
    title: "Radialbar & Radar",
    icon: "octagon",
    href: "/charts/radialbar",
  },
  {
    navlabel: true,
    subheader: "AUTHENTICATION",
    icon: "mdi mdi-dots-horizontal",
    href: "Authentication",
  },
  {
    title: "Log in",
    icon: "log-in",
    href: "/authentication/login",
  },
  {
    title: "Register",
    icon: "user-plus",
    href: "/authentication/register",
  },
  {
    title: "Reset Password",
    icon: "refresh-ccw",
    href: "/authentication/reset-password",
  },
  {
    title: "Error",
    icon: "alert-triangle",
    href: "/authentication/error",
  },
];

export default Menuitems;
