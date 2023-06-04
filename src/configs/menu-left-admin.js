const menuLeftItem = [
    {
        title: "Dashboards",
        icon: "home",
        collapse: true,
        href: "/admin"
    },
    {
        title: "Manage Content",
        icon: "file-text",
        collapse: true,
        children: [
            {
                title: "Page List",
                href: "/admin/contents/page",
            },
            {
                title: "Categories",
                href: "/admin/contents/categories",
            },
            {
                title: "Post list",
                href: "/admin/contents/post",
            },
        ],
    },
    {
        title: "Dealership Services",
        icon: "server",
        collapse: true,
        children: [
            {
                title: "Services List",
                href: "/admin/contents/dealership-services",
            },
            {
                title: "Add Service",
                href: "/admin/contents/dealership-services/add",
            }
        ],
    },
    {
        title: "Email Manage",
        icon: "mail",
        children: [
            {
                title: "Email Log",
                href: "/admin/email-manage/email-log",
            },
            {
                title: "Email Template",
                href: "/admin/email-manage/email-template",
            },
            {
                title: "Email Type",
                href: "/admin/email-manage/email-type",
            },
        ],
    },
    {
        title: "Notification",
        icon: "bell",
        collapse: true,
        children: [
            {
                title: "Notify List",
                href: "/admin/notification",
            },
        ],
    },
    {
        title: "Users",
        icon: "user",
        collapse: true,
        children: [
            {
                title: "User List",
                href: "/admin/users/user-list",
            },
            {
                title: "New User",
                href: "/admin/users/new-user",
            },
            {
                title: "Roles",
                href: "/admin/users/roles",
            },
        ],
    },
    {
        title: "Log",
        icon: "slack",
        collapse: true,
        children: [
            {
                title: "Errors",
                href: "/admin/log/errors",
            },
            {
                title: "log",
                href: "/admin/log",
            },
        ],
    },
    {
        title: "Adds",
        icon: "globe",
        collapse: true,
        children: [
            {
                title: "Ads List",
                href: "#",
            },
            {
                title: "New Ads",
                href: "#",
            },
        ],
    },
    {
        title: "Media",
        icon: "image",
        collapse: true,
        children: [
            {
                title: "Libary",
                href: "/admin/media/libary",
            },
            {
                title: "Slideshow",
                href: "/admin/media/slides-show",
            },
        ],
    },
    {
        title: "Theme",
        icon: "package",
        collapse: true,
        children: [
            {
                title: "Menus",
                href: "/admin/theme/menus",
            },
            {
                title: "Blocks",
                href: "/admin/theme/blocks",
            },
            {
                title: "Theme Options",
                href: "/admin/theme/theme-options",
            },
        ],
    },
    {
        title: "System Settings",
        icon: "settings",
        collapse: true,
        children: [
            {
                title: "Default",
                href: "/admin/system-settings/default",
            },
            {
                title: "Users",
                href: "/admin/system-settings/users",
            },
            {
                title: "Method Upload",
                href: "/admin/system-settings/method-upload",
            },
            {
                title: "Media",
                href: "/admin/system-settings/media",
            },
            {
                title: "Slideshow",
                href: "/admin/system-settings/slides-show",
            },
            {
                title: "Free",
                href: "/admin/system-settings/free",
            },
        ],
    },

];

export default menuLeftItem;