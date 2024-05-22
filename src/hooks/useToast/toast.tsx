import { genId } from "./helpers";
import { type Toast, type ToasterToast } from "./types";
import { dispatch } from "./useToast";

export const TOAST_LIMIT = 1;
export const TOAST_REMOVE_DELAY = 1000000;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) => {
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  };
  const dismiss = () => {
    dispatch({ type: "DISMISS_TOAST", toastId: id });
  };

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: any) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

export default toast;
