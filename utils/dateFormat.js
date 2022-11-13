
// module.exports = () => {

    const now = new Date()
    console.log(now)
    
    const year = now.getFullYear()
    console.log(year)
    
    const month = now.getMonth() +1
    console.log(month)
    
    const day = now.getDate()
    console.log(day)
    
    const hours = now.getHours()
    console.log(hours)
    
    const minutes = now.getMinutes()
    console.log(minutes)
    
    const seconds = now.getSeconds()
    console.log(seconds)

    const timestamp = `${month} ${day}, ${year} at ${hours}:${minutes}`;
  
//     return timestamp;
// }

module.exports = timestamp;

// ${periodOfDay}
// const hours = now.getHours()
// const periodOfDay
//     if (now.getHours > 12) {
//       hours= now.getHours() -12
//       periodOfDay= "pm";
//     } else {
//       hours = now.getHours();
//       periodOfDay = "am";
//     }
  
 