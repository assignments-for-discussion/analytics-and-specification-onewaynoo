function average(num) {
  const newNum = num.filter((data)=> isNaN(data) === false);
  return newNum.reduce((p, c)=> p + c, 0) / newNum.length;
}

module.exports = {average};
