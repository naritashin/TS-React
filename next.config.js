const isPrd = process.env.NODE_ENV === "production";

module.exports = () => {
  return {
    distDir: "../dist",
    devIndicators: !isPrd
  };
};
