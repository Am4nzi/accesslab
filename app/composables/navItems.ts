export interface NavigationMenuChild {
  label: string;
  description: string;
  to: string;
}

export interface NavigationMenuItem {
  label: string;
  icon?: string;
  defaultOpen?: boolean | "delay";
  children?: NavigationMenuChild[];
}

export const useNavigationMenu = () => {
  const items = useState<NavigationMenuItem[]>("navigation-menu-items", () => [
    {
      label: "Components",
      icon: "i-lucide-box",
      defaultOpen: true,
      children: [
        {
          label: "Accordion",
          description: "Learn accordion components best practices.",
          to: "/components/accordion",
        },
        {
          label: "Button",
          description:
            "Learn HTML button element accessibility best practices.",
          to: "/components/button",
        },
        {
          label: "Carousel",
          description:
            "Learn carousel components accessibility best practices.",
          to: "/components/carousel",
        },
        {
          label: "Menu/Dropdown",
          description:
            "Learn menu/dropdown components accessibility best practices.",
          to: "/components/dropdown",
        },
        {
          label: "Modal/Dialog",
          description:
            "Learn HTML dialog element and modal components accessibility best practices.",
          to: "/components/modal",
        },
        {
          label: "Tooltip",
          description: "Learn tooltip components accessibility best practices.",
          to: "/components/tooltip",
        },
      ],
    },
  ]);

  return {
    items: readonly(items),
  };
};
