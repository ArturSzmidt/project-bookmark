import React from 'react';
import { useState } from 'react';
import arrow from '../img/icon-arrow.svg';
import arrowDown from '../img/icon-arrow.svg';

const Faq = () => {
  const data = [
    {
      heading: 'What is a Bookmark?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum neque, vulputate non est at, molestie auctor ex. Praesent porttitor, nulla in varius eleifend, sapien libero faucibus metus, pellentesque placerat est lorem ac tellus. Sed vestibulum cursus enim, quis rhoncus tortor venenatis in. Maecenas condimentum nisi et dui aliquam tincidunt. Sed quis sem sed magna ultricies consequat. Nulla dictum sagittis urna, sit amet elementum tellus cursus id. Aliquam accumsan vel nisi ut posuere. Fusce est justo, mollis nec urna dignissim, lacinia interdum mauris. Phasellus non urna et enim iaculis interdum ut sit amet ante. Nullam in sem sit amet libero sollicitudin feugiat. Maecenas metus massa, dictum eu dictum nec, lacinia vel purus. In bibendum massa quis erat tristique finibus ac sit amet diam.',
    },
    {
      heading: 'How i can request a new browser?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum neque, vulputate non est at, molestie auctor ex. Praesent porttitor, nulla in varius eleifend, sapien libero faucibus metus, pellentesque placerat est lorem ac tellus. Sed vestibulum cursus enim, quis rhoncus tortor venenatis in. Maecenas condimentum nisi et dui aliquam tincidunt. Sed quis sem sed magna ultricies consequat. Nulla dictum sagittis urna, sit amet elementum tellus cursus id. Aliquam accumsan vel nisi ut posuere. Fusce est justo, mollis nec urna dignissim, lacinia interdum mauris. Phasellus non urna et enim iaculis interdum ut sit amet ante. Nullam in sem sit amet libero sollicitudin feugiat. Maecenas metus massa, dictum eu dictum nec, lacinia vel purus. In bibendum massa quis erat tristique finibus ac sit amet diam.',
    },
    {
      heading: 'Is there a mobile app?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum neque, vulputate non est at, molestie auctor ex. Praesent porttitor, nulla in varius eleifend, sapien libero faucibus metus, pellentesque placerat est lorem ac tellus. Sed vestibulum cursus enim, quis rhoncus tortor venenatis in. Maecenas condimentum nisi et dui aliquam tincidunt. Sed quis sem sed magna ultricies consequat. Nulla dictum sagittis urna, sit amet elementum tellus cursus id. Aliquam accumsan vel nisi ut posuere. Fusce est justo, mollis nec urna dignissim, lacinia interdum mauris. Phasellus non urna et enim iaculis interdum ut sit amet ante. Nullam in sem sit amet libero sollicitudin feugiat. Maecenas metus massa, dictum eu dictum nec, lacinia vel purus. In bibendum massa quis erat tristique finibus ac sit amet diam.',
    },
    {
      heading: 'What about other Chromium browsers?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum neque, vulputate non est at, molestie auctor ex. Praesent porttitor, nulla in varius eleifend, sapien libero faucibus metus, pellentesque placerat est lorem ac tellus. Sed vestibulum cursus enim, quis rhoncus tortor venenatis in. Maecenas condimentum nisi et dui aliquam tincidunt. Sed quis sem sed magna ultricies consequat. Nulla dictum sagittis urna, sit amet elementum tellus cursus id. Aliquam accumsan vel nisi ut posuere. Fusce est justo, mollis nec urna dignissim, lacinia interdum mauris. Phasellus non urna et enim iaculis interdum ut sit amet ante. Nullam in sem sit amet libero sollicitudin feugiat. Maecenas metus massa, dictum eu dictum nec, lacinia vel purus. In bibendum massa quis erat tristique finibus ac sit amet diam.',
    },
  ];
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="py-20">
      <div className="container">
        <div className="sm:w-3 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-prDarkBlue ">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-prGray mt-4">
            Here are some of our FAQs. If you have any questions you'd like
            answered please feel free to email us.
          </p>
        </div>
        {/* #tailwind accordion */}
        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          {data.map((item, i) => (
            <>
              <div
                className="flex items-center border-b py-4"
                onClick={() => toggle(i)}
              >
                <span className="flex-1 ">{item.heading}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    className={selected === i ? 'arrowRotate' : 'arrow'}
                    fill="none"
                    stroke="#5267DF"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
              <span className="flex-1 text-prGray">
                {selected === i ? item.content : ''}
              </span>
            </>
          ))}

          <button
            type="button"
            className="button button-purple self-center mt-12 hover:bg-white hover:text-prLightBlue  "
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
