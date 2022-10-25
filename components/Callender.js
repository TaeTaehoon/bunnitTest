import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agust",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const now = new Date();

  const [targetDate, setTargetDate] = useState({
    year: now.getFullYear(),
    month: now.getMonth(),
  });
  const [date, setDate] = useState({
    prevDate: null,
    prevDay: null,
    currDate: null,
    currDay: null,
  });
  const [prevDays, setPrevDays] = useState([]);
  const [currDays, setCurrDays] = useState([]);

  const handleClickPrevBtn = () => {
    if (targetDate.month > 0) {
      setTargetDate({ ...targetDate, month: targetDate.month - 1 });
      setPrevDays(new Array(0));
      setCurrDays(new Array(0));
    }
  };
  const handleClickNextBtn = () => {
    if (targetDate.month < 11) {
      setTargetDate({ ...targetDate, month: targetDate.month + 1 });
      setPrevDays(new Array(0));
      setCurrDays(new Array(0));
    }
  };
  const handleClickDate = (e) => {
    console.log(e);
    console.log("click");
  };
  useEffect(() => {
    const prev = new Date(targetDate.year, targetDate.month, 0);
    const curr = new Date(targetDate.year, targetDate.month + 1, 0);
    console.log(prev);
    setDate({
      ...date,
      prevDate: prev.getDate(),
      prevDay: prev.getDay(),
      currDate: curr.getDate(),
      currDay: curr.getDay(),
    });
  }, [targetDate]);
  useEffect(() => {
    const prevs = [];
    const currs = [];
    for (let i = date.prevDate - date.prevDay + 1; i <= date.prevDate; i++) {
      prevs.push(i);
    }
    for (let j = 1; j <= date.currDate; j++) {
      currs.push(j);
    }
    setPrevDays([...prevDays, ...prevs]);
    setCurrDays([...currDays, ...currs]);
  }, [date]);
  console.log(date);
  console.log(prevDays);
  console.log(currDays);
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Button title="&lt;" onPress={handleClickPrevBtn} />
        <View style={styles.currentInfo}>
          <Text>{MONTHS[targetDate.month]}</Text>
          <Text>{targetDate.year}</Text>
        </View>

        <Button title="&gt;" onPress={handleClickNextBtn} />
      </View>
      <View style={styles.daysContainer}>
        {DAYS.map((day, idx) => {
          return (
            <Text
              style={
                idx === 0
                  ? styles.daysTitle.sunday
                  : idx === 6
                  ? styles.daysTitle.saturday
                  : null
              }
              key={`${day}${idx}`}
            >
              {day}
            </Text>
          );
        })}
      </View>
      <View style={styles.dateContainer}>
        {prevDays.map((day, idx) => {
          return (
            <Button
              title={`${day}`}
              key={`${day}${idx}`}
              style={styles.dateContainer.date}
              onPress={handleClickDate}
            />
          );
        })}
        {currDays.map((day, idx) => {
          return (
            <Button
              title={`${day}`}
              key={`${day}${idx}`}
              style={styles.dateContainer.date}
              onPress={handleClickDate}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
  },
  headerWrapper: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    padding: "0 5%",
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currentInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
  },
  headerBtn: {},
  daysContainer: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  daysTitle: {
    sunday: {
      color: "red",
    },
    saturday: {
      color: "blue",
    },
  },
  dateContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    date: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "calc(100%/7)",
    },
  },
});

export default Calendar;
