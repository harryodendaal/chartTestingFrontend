import React, { useState, useRef, useEffect} from 'react'
import styles from "./MultiRangeSlider.module.scss"

interface MultiRangeSliderProps {
  min:number,
  max:number
}

export const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({min,max}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef(null);

    
  useEffect(() => setLeftValue(), [minVal]);

  useEffect(() => setRightValue(), [maxVal]);


  // Convert to percentage
  const getPercent = value => Math.round(((value - min) / (max - min)) * 100);
  // Set width of the range to decrease from the left side
  const setLeftValue = () => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  };

  // Set width of the range to decrease from the right side
  const setRightValue = () => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
    range.current.style.width = `${maxPercent - minPercent}%`;
    }
  };
    return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => setMinVal(Math.min(parseInt(event.target.value), maxVal - 1))}
        className={styles.thumb + " " + styles.thumb__left}
        style={{ zIndex: minVal > max - 100 && "5" }}

      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => setMaxVal(Math.max(parseInt(event.target.value), minVal + 1))}
        className={styles.thumb + " " + styles.thumb__right}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track}/>
        <div ref={range} className={styles.slider__range}/>

        <div className={styles.slider__left_value}>{minVal}</div>
        <div className={styles.slider__right_value}>{maxVal}</div>
      </div>
    </>
  );
}