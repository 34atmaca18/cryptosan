const abbreviateNumber = (value) => {
    if (value >= 1.0e+12) {
      return (value / 1.0e+12).toFixed(1) + 'T';
    } else if (value >= 1.0e+9) {
      return (value / 1.0e+9).toFixed(1) + 'B';
    } else if (value >= 1.0e+6) {
      return (value / 1.0e+6).toFixed(1) + 'M';
    } else if (value >= 1.0e+3) {
      return (value / 1.0e+3).toFixed(1) + 'K';
    } else {
      return value.toFixed(1);
    }
  };

const formatNumber = (value) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
});
};
  
export {formatNumber,abbreviateNumber};
