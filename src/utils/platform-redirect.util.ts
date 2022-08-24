import { SHARING_PLATFORMS } from "../constants/sharing-platforms";
import * as opn from "opn";
import { QuickPickItem } from "vscode";
export const platformRedirect = (
  platform: QuickPickItem,
  selectedText: string | undefined,
  user?: string
) => {
  const selectedPlatform = SHARING_PLATFORMS.find(
    (item) => item.name === platform.label
  );
  if (typeof selectedText === "string") {
    switch (selectedPlatform?.name) {
      case "Whatsapp":
        opn(selectedPlatform?.url(selectedText));
        break;
      case "Teams":
        opn(selectedPlatform?.url(selectedText, user));
        break;
      default:
        break;
    }
  }
};
