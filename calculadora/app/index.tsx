import CustomBtn from "@/components/CustomBtn";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const index = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResultTotal,
  } = useCalculator();

  const buttons = [
    {
      id: 1,
      label: "C",
      color: Colors.lightGray,
    },
    {
      id: 2,
      label: "+/-",
      color: Colors.lightGray,
    },
    {
      id: 3,
      label: "del",
      color: Colors.lightGray,
    },
    {
      id: 4,
      label: "/",
      color: Colors.orange,
    },
    {
      id: 5,
      label: "7",
      color: Colors.darkGray,
    },
    {
      id: 6,
      label: "8",
      color: Colors.darkGray,
    },
    {
      id: 7,
      label: "9",
      color: Colors.darkGray,
    },
    {
      id: 8,
      label: "x",
      color: Colors.orange,
    },
    {
      id: 10,
      label: "4",
      color: Colors.darkGray,
    },
    {
      id: 11,
      label: "5",
      color: Colors.darkGray,
    },
    {
      id: 12,
      label: "6",
      color: Colors.darkGray,
    },
    {
      id: 13,
      label: "-",
      color: Colors.orange,
    },
    {
      id: 14,
      label: "1",
      color: Colors.darkGray,
    },
    {
      id: 15,
      label: "2",
      color: Colors.darkGray,
    },
    {
      id: 16,
      label: "3",
      color: Colors.darkGray,
    },
    {
      id: 17,
      label: "+",
      color: Colors.orange,
    },
    {
      id: 18,
      label: "0",
      color: Colors.darkGray,
      isCero: true,
    },
    {
      id: 19,
      label: ".",
      color: Colors.darkGray,
    },
    {
      id: 20,
      label: "=",
      color: Colors.orange,
    },
  ];

  return (
    <View style={globalStyles.calculaterContainer}>
      <CustomText variant="h1">{formula}</CustomText>
      {formula === prevNumber ? (
        <CustomText variant="h2"> </CustomText>
      ) : (
        <CustomText variant="h2">{prevNumber}</CustomText>
      )}

      <View style={globalStyles.row}>
        {buttons.map((btn) => (
          <CustomBtn
            key={btn.id}
            label={btn.label}
            color={btn.color}
            onPress={() => {
              switch (btn.label) {
                case "C":
                  clean();
                  break;
                case "+/-":
                  toggleSign();
                  break;
                case "del":
                  deleteLast();
                  break;
                case "/":
                  divideOperation();
                  break;
                case "x":
                  multiplyOperation();
                  break;
                case "-":
                  substractOperation();
                  break;
                case "+":
                  addOperation();
                  break;
                case "=":
                  calculateResultTotal();
                  break;
                default:
                  buildNumber(btn.label);
                  break;
              }
            }}
            isCero={btn.isCero}
          />
        ))}
      </View>
    </View>
  );
};

export default index;
