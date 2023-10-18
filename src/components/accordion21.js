import React from "react";
import Accordion22 from "./accordion22.js";

const Accordion21 = () => {
  const accordionData = [
    {
      location: "DE",
      yearProcent: "97%",
      monthProcent: "62%",
      callsSum: "76",
      totDSum: "51",
      avgCallSum: "64",
      reachSum: "87%",
      notRepliedSum: "0",
      ringTimeSum: "61",
      callsInSum: "99",
      timePaidSum: "1:33",
      bonusEurSum: "4",
      czkSum: "236",
      content: {
        location: "HD",
        personName: "Hana Dobiasova",
        start: "9:58",
        end: "19:04",
        calls: "20",
        totD: "58",
        totCallTime: "00:00",
        avgCall: "51",
        reach: "19%",
        callsOut: "59",
        replied1: "1",
        notReplied: "0",
        ringTime: "38",
        callsIn: "72",
        replied2: "10",
        out: "0:01",
        in: "00:00",
        potRes: "1:33",
        potCont: "00:00",
        crea: "00:00",
        transl: "00:00",
        timePaid: "1:33",
        bonusEur: "6",
        czk: "37",
        emr: "1%",
        ems: "74%",
      },
    },
    // {
    //   title: 'Section 2',
    //   location: 'DE',
    //   content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    //   reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    //   quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    //   pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    //   quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    //   Repudiandae, mollitia id reprehenderit a ab odit!`
    // },
    // {
    //   title: 'Section 3',
    //   location: 'DE',
    //   content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    //   quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    //   dolor ut sequi minus iste? Quas?`
    // },
    // {
    //   title: 'Section 4',
    //   location: 'DE',
    //   content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    //   quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    //   dolor ut sequi minus iste? Quas?`
    // },
    // {
    //   title: 'Section 5',
    //   location: 'DE',
    //   content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    //   quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    //   dolor ut sequi minus iste? Quas?`
    // },
    // {
    //   title: 'Section 6',
    //   location: 'DE',
    //   content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    //   quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    //   dolor ut sequi minus iste? Quas?`
    // },
    // {
    //   title: 'Section 7',
    //   location: 'DE',
    //   content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    //   quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    //   dolor ut sequi minus iste? Quas?`
    // }
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(
          ({
            location,
            yearProcent,
            monthProcent,
            callsSum,
            totDSum,
            avgCallSum,
            reachSum,
            notRepliedSum,
            ringTimeSum,
            callsInSum,
            timePaidSum,
            bonusEurSum,
            czkSum,
            content,
          }) => (
            <Accordion22
              location={location}
              yearProcent={yearProcent}
              monthProcent={monthProcent}
              callsSum={callsSum}
              totDSum={totDSum}
              avgCallSum={avgCallSum}
              reachSum={reachSum}
              notRepliedSum={notRepliedSum}
              ringTimeSum={ringTimeSum}
              callsInSum={callsInSum}
              timePaidSum={timePaidSum}
              bonusEurSum={bonusEurSum}
              czkSum={czkSum}
              content={content}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Accordion21;
