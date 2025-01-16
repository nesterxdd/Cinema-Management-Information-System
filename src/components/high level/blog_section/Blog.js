import Message from "../../low level/Message";
import PrimaryButton from "../../low level/PrimaryButton";
import "./styles.scss";

function Blog(){
    return (
      <div className="blog-section">
        <div className="left-side">
          <div className="section-header">Join Our Community</div>
          <p className="description">
            Discover the latest in cinema, connect with fellow movie lovers, and
            be part of a community that shares your passion for films. Whether
            you’re here to discuss the newest releases, explore hidden gems, or
            share your favorite cinematic moments, there's always a space for
            you. Start your journey today!
          </p>
          <PrimaryButton>Join Now</PrimaryButton>
        </div>

        <div className="right-side">
          <div className="text-dialog">
            <Message
              type="me"
              text="Hello, I just watched an amazing film!"
              time="12:45 PM"
            />
            <Message
              type="friend"
              text="Which one? Did you like it?"
              time="12:46 PM"
            />
            <Message
              type="me"
              text="Yeah, for sure. The story of The Great Gatsby is inspiring."
              time="12:47 PM"
            />
            <Message
              type="friend"
              text="I agree! The themes of love, ambition, and tragedy are timeless."
              time="12:48 PM"
            />
          </div>
        </div>
      </div>
    );
}

export default Blog;