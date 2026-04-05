import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isSelected = theme == 'dark';
    const toggleTheme = (active: boolean) => {
        if (active) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <div className="right-4 top-4 absolute">
            <Switch isSelected={isSelected} onChange={toggleTheme} size="lg">
                <Switch.Control>
                    <Switch.Thumb>
                        <Switch.Icon>
                            {isSelected
                                ? <SunIcon size={12} />
                                : <MoonIcon size={12} />
                            }
                        </Switch.Icon>
                    </Switch.Thumb>
                </Switch.Control>
            </Switch>
        </div>
    );
};