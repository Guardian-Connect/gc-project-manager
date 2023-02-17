import React, { useEffect, useState } from "react";
import Dispcardz from "./Dispcardz";
import { getSomething } from "../api";
import Projectdisplaycontrol from "./Projectdisplaycontrol";
import Projectdizplay from "./Projectdizplay";
import { makeStyles } from "@mui/styles";

const Projectdisplay = ({ searchInput, setSearchInput }) => {
  const primary = "white";
  const secondary = "blue";
  const [filters, setFilters] = useState([]);
  const [tracker, setTracker] = useState([]);
  const [buttonOne, setButtonOne] = useState(primary);
  const [buttonTwo, setButtonTwo] = useState(primary);
  const [buttonThree, setButtonThree] = useState(primary);
  const [buttonFour, setButtonFour] = useState(primary);
  const [buttonFive, setButtonFive] = useState(primary);
  const [buttonSix, setButtonSix] = useState(primary);
  const [buttonSeven, setButtonSeven] = useState(primary);
  const [buttonEight, setButtonEight] = useState(primary);
  const [buttonNine, setButtonNine] = useState(primary);
  const [buttonTen, setButtonTen] = useState(primary);
  const [buttonEleven, setButtonEleven] = useState(primary);
  const [buttonTwelve, setButtonTwelve] = useState(primary);
  const [buttonThirteen, setButtonThirteen] = useState(primary);
  const [textOne, setTextOne] = useState(secondary);
  const [textTwo, setTextTwo] = useState(secondary);
  const [textThree, setTextThree] = useState(secondary);
  const [textFour, setTextFour] = useState(secondary);
  const [textFive, setTextFive] = useState(secondary);
  const [textSix, setTextSix] = useState(secondary);
  const [textSeven, setTextSeven] = useState(secondary);
  const [textEight, setTextEight] = useState(secondary);
  const [textNine, setTextNine] = useState(secondary);
  const [textTen, setTextTen] = useState(secondary);
  const [textEleven, setTextEleven] = useState(secondary);
  const [textTwelve, setTextTwelve] = useState(secondary);
  const [textThirteen, setTextThirteen] = useState(secondary);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 226,
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    getSomething().then((resp) => {
      setTracker(resp.dispinfo);
    });
  }, []);

  const handleClear = () => {
    setFilters([]);
    setSearchInput("");
    setButtonOne(primary);
    setButtonTwo(primary);
    setButtonThree(primary);
    setButtonFour(primary);
    setButtonFive(primary);
    setButtonSix(primary);
    setButtonSeven(primary);
    setButtonEight(primary);
    setButtonNine(primary);
    setButtonTen(primary);
    setButtonEleven(primary);
    setButtonTwelve(primary);
    setButtonThirteen(primary);
    setTextOne(secondary);
    setTextTwo(secondary);
    setTextThree(secondary);
    setTextFour(secondary);
    setTextFive(secondary);
    setTextSix(secondary);
    setTextSeven(secondary);
    setTextEight(secondary);
    setTextNine(secondary);
    setTextTen(secondary);
    setTextEleven(secondary);
    setTextTwelve(secondary);
    setTextThirteen(secondary);
  };
  const gp_names = [
    { name: "Majors", value: "MAJ0001" },
    { name: "Quick Gas", value: "QUI0003" },
    { name: "Quality Oil", value: "QUA0006" },
  ];

  const handleClickOne = () => {
    setFilters([...filters, (item) => item.gp_cust.includes("MAJ0001")]);
    setButtonOne(secondary);
    setTextOne(primary);
  };

  const handleClickTwo = () => {
    setFilters([...filters, (item) => item.gp_cust.includes("QUI0003")]);
    setButtonTwo(secondary);
    setTextTwo(primary);
  };

  const handleClickThree = () => {
    setFilters([...filters, (item) => !item.notes.includes("X")]);
    setButtonThree(secondary);
    setTextThree(primary);
  };

  const handleClickFour = () => {
    setFilters([...filters, (item) => item.totaldisp.includes("0")]);
    setButtonFour(secondary);
    setTextFour(primary);
  };

  const handleClickFive = () => {
    setFilters([...filters, (item) => item.quote.includes("O")]);
    setButtonFive(secondary);
    setTextFive(primary);
  };

  const handleClickSix = () => {
    setFilters([...filters, (item) => item.gp_cust.includes("QUA")]);
    setButtonTwelve(secondary);
    setTextTwelve(primary);
  };

  const handleClickSeven = () => {
    console.log("Firing");
    setFilters([...filters, (item) => item.quote.includes("S")]);
    setButtonThirteen(secondary);
    setTextThirteen(primary);
  };

  const handlePhaseOne = () => {
    setFilters([...filters, (item) => item.phase.includes("1")]);
    setButtonSix(secondary);
    setTextSix(primary);
  };

  const handlePhaseTwo = () => {
    setFilters([...filters, (item) => item.phase.includes("2")]);
    setButtonSeven(secondary);
    setTextSeven(primary);
  };

  const handlePhaseThree = () => {
    setFilters([...filters, (item) => item.phase.includes("3")]);
    setButtonEight(secondary);
    setTextEight(primary);
  };

  const handlePhaseFour = () => {
    setFilters([...filters, (item) => item.phase.includes("4")]);
    setButtonNine(secondary);
    setTextNine(primary);
  };

  const handlePhaseFive = () => {
    setFilters([...filters, (item) => item.phase.includes("5")]);
    setButtonTen(secondary);
    setTextTen(primary);
  };

  const handlePhaseZero = () => {
    setFilters([...filters, (item) => item.phase.includes("0")]);
    setButtonEleven(secondary);
    setTextEleven(primary);
  };

  const applyFilters = (tracker) => {
    return tracker.filter((item) => {
      return filters.every((filter) => {
        return filter(item);
      });
    });
  };

  const filteredItems = applyFilters(tracker);

  return (
    <div className="apptrack">
      <Projectdisplaycontrol
        filters={filters}
        setFilters={setFilters}
        tracker={tracker}
        setTracker={setTracker}
        buttonOne={buttonOne}
        setButtonOne={setButtonOne}
        buttonTwo={buttonTwo}
        setButtonTwo={setButtonTwo}
        buttonThree={buttonThree}
        setButtonThree={setButtonThree}
        buttonFour={buttonFour}
        setButtonFour={setButtonFour}
        buttonFive={buttonFive}
        setButtonFive={setButtonFive}
        buttonSix={buttonSix}
        setButtonSix={setButtonSix}
        buttonSeven={buttonSeven}
        setButtonSeven={setButtonSeven}
        buttonEight={buttonEight}
        setButtonEight={setButtonEight}
        buttonNine={buttonNine}
        setButtonNine={setButtonNine}
        buttonTen={buttonTen}
        setButtonTen={setButtonTen}
        buttonEleven={buttonEleven}
        setButtonEleven={setButtonEleven}
        buttonTwelve={buttonTwelve}
        setButtonTwelve={setButtonTwelve}
        buttonThirteen={buttonThirteen}
        setButtonThirteen={setButtonThirteen}
        textOne={textOne}
        setTextOne={setTextOne}
        textTwo={textTwo}
        setTextTwo={setTextTwo}
        textThree={textThree}
        setTextThree={setTextThree}
        textFour={textFour}
        setTextFour={setTextFour}
        textFive={textFive}
        setTextFive={setTextFive}
        textSix={textSix}
        setTextSix={setTextSix}
        textSeven={textSeven}
        setTextSeven={setTextSeven}
        textEight={textEight}
        setTextEight={setTextEight}
        textNine={textNine}
        setTextNine={setTextNine}
        textTen={textTen}
        setTextTen={setTextTen}
        textEleven={textEleven}
        setTextEleven={setTextEleven}
        textTwelve={textTwelve}
        setTextTwelve={setTextTwelve}
        textThirteen={textThirteen}
        setTextThirteen={setTextThirteen}
        handleClear={handleClear}
        handleClickOne={handleClickOne}
        handleClickTwo={handleClickTwo}
        handleClickThree={handleClickThree}
        handleClickFour={handleClickFour}
        handleClickFive={handleClickFive}
        handlePhaseOne={handlePhaseOne}
        handlePhaseTwo={handlePhaseTwo}
        handlePhaseThree={handlePhaseThree}
        handlePhaseFour={handlePhaseFour}
        handlePhaseFive={handlePhaseFive}
        handlePhaseZero={handlePhaseZero}
        handleClickSix={handleClickSix}
        handleClickSeven={handleClickSeven}
      />
      {filteredItems
        .filter((client, index) => {
          const clientsId = client.gvr_id;
          if (clientsId.includes(searchInput.toLowerCase())) {
            return true;
          }
        })
        .map((site) => (
          <div key={site.id}>
            <Dispcardz site={site} />
          </div>
        ))}
    </div>
  );
};

export default Projectdisplay;
