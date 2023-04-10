import React from "react";

function SessionAbout() {
  return (
    <div className="session-about">
      <div className="flexible-center flex-col my-16">
        <h2 className="font-semibold text-3xl">
          Schechuled for <span className="text-primary">2023-10-12</span> at{" "}
          <span className="text-primary">12:00PM</span>
        </h2>
        <h1 className="text-slate-400 text-2xl pt-1">2 Days Left</h1>
      </div>
      <div className="flex justify-between gap-16 text-xl">
        <div className="flex-1">
          <h1 className="text-primary font-semibold mb-2">
            About this Session
          </h1>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            explicabo suscipit animi ea voluptatem eum vitae officiis ratione
            similique, laboriosam hic atque delectus tempora eaque deserunt
            eligendi repellat amet quaerat necessitatibus nesciunt consequatur
            autem harum. Illum laudantium error illo aperiam omnis. Ratione,
            nostrum exercitationem placeat veniam rem nesciunt veritatis quidem!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-primary font-semibold mb-2">Location</h1>
            <p>Tetouan Al Maktoub Laibrary</p>
          </div>
          <div>
            <h1 className="text-primary font-semibold mb-2">Places</h1>
            <p>3 people subscribed</p>
            <p>2 Available</p>
          </div>
          <div>
            <h1 className="text-primary font-semibold mb-2">
              Contact information
            </h1>
            <p>
              yssnmed@gmail.com <br />
              0610580625
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionAbout;
