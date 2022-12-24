import { useEffect, useState } from "react";

export function useMargin(item, marginValueObject) {
  let [margin, setMargin] = useState();
  let [oldValue, setoldValue] = useState();
  let [whichResolutionUsing, setwhichResolutionUsing] = useState([]);

  const marginForPrice = (resize) => {
    const numberOfDigits = item?.itemTotal
      ? item.itemTotal?.toString().length
      : 2; //if there is an item added then check how many digits the price has, default 00,00USD (2)

    if (!margin || resize) {
      //for first render when margin is not set or when will be resize window
      //assign from which array, the margin will be set
      if (window.matchMedia("(max-width:860px)").matches) {
        setwhichResolutionUsing(
          (whichResolutionUsing = marginValueObject.mobile)
        );
      }

      if (window.matchMedia("(min-width:860px)").matches) {
        setwhichResolutionUsing(
          (whichResolutionUsing = marginValueObject.tablet)
        );
      }

      if (window.matchMedia("(min-width:1920px)").matches) {
        setwhichResolutionUsing(
          (whichResolutionUsing = marginValueObject.desktop)
        );
      }
    }

    if (oldValue != numberOfDigits || resize) {
      switch (numberOfDigits) {
        case 2:
          setMargin(whichResolutionUsing[0]);
          break;
        case 3:
          setMargin(whichResolutionUsing[1]);
          break;
        case 4:
          setMargin(whichResolutionUsing[2]);
          break;
        default:
          "";
      }
    }
    setoldValue(numberOfDigits);
  };

  useEffect(() => {
    marginForPrice();
    window.addEventListener("resize", () => marginForPrice(true));
  }, [item?.itemTotal]);

  return margin;
}
