import { Home, Calendar, CheckSquare, Inbox } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const projects = [
  { title: "Inbox", url: "/", icon: Inbox },
  { title: "Today", url: "/today", icon: Calendar },
  { title: "Upcoming", url: "/upcoming", icon: CheckSquare },
  { title: "Work", url: "/work", icon: Home },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="px-6 py-6">
          <h1 className="text-xl font-semibold text-foreground">TaskFlow</h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton
                    asChild
                    className={`px-6 py-2 ${
                      isActive(project.url)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <NavLink to={project.url} end>
                      <project.icon className="h-4 w-4" />
                      {open && <span>{project.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
