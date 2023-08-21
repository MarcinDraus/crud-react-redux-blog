const dateToStr = (datepicker) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(datepicker).toLocaleDateString('en-US', options);
};

export default dateToStr;


  // const dateToStr = (datepicker) =>
  // datepicker
  //   .dateString = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   };

  // export default dateToStr;

 