import {
  BarChart3,
  Blocks,
  Code2,
  LifeBuoy,
  MessagesSquare,
  Monitor,
  PlugZap,
  Smartphone,
  Workflow
} from "lucide-react";

const icons = {
  BarChart3,
  Blocks,
  Code2,
  LifeBuoy,
  MessagesSquare,
  Monitor,
  PlugZap,
  Smartphone,
  Workflow
};

export function ServiceIcon({ name = "Code2", size = 26 }) {
  const Icon = icons[name] || Code2;
  return <Icon size={size} />;
}
