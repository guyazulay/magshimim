import React, { useState, useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export const getReadableSensors = () => [
    {
        name: "humidity",
        unit: "%",
        title: "Humidity"
    },
    {
        name: "temperature",
        unit: "C",
        title: "Temperature"
    },
    {
        name: "compass",
        unit: "",
        title: "Compass"
    },
    {
        name: "pressure",
        unit: "bar",
        title: "Pressure"
    }
]

const translateColor = (rgbArray = []) =>
    `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`

export const getNormalizedColor = color =>
    typeof color === "string" ?
        color :
        translateColor(color)

export const ERROR_MESSAGE = "NO DATA"

export const getEditableColors = () =>
    [
        "pink",
        "blue",
        "green",
        "yellow",
        "red",
        "white"
    ]