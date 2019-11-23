import React, { Component } from "react";

class MapSection extends Component {
  render() {
    return (
      <div className="map-area">
        <div id="googleMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.997443139561!2d90.3908122146522!3d23.783105384573194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76dd3404e41%3A0xc4d73daf4abadda7!2sAmerican%20Best%20IT!5e0!3m2!1sen!2sbd!4v1574507674878!5m2!1sen!2sbd" height="100%" width="100%" frameborder="0" allowfullscreen=""></iframe>
        </div>
      </div>

    )
  }
}
export default MapSection;