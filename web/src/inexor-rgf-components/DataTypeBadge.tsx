import {DataType, SocketType} from "../inexor-rgf-graphql";
import {Badge} from "@mantine/core";

function getDataTypeGradient(dataType: DataType | undefined) {
  switch (dataType) {
    case "BOOL":
      return { from: 'grape', to: 'pink', deg: 90 };
    case "NUMBER":
      return { from: 'indigo', to: 'cyan', deg: 90 };
    case "STRING":
      return { from: 'orange', to: 'red', deg: 90 };
    case "ARRAY":
      return { from: 'pink', to: 'cyan', deg: 90 };
    case "OBJECT":
      return { from: 'lime', to: 'indigo', deg: 90 };
    default:
      return { from: 'gray', to: 'gray', deg: 90 };
  }
}

interface DataTypeBadgeProperties {
  dataType: DataType | undefined;
}

function DataTypeBadge({dataType} : DataTypeBadgeProperties) {
  return (
    <Badge variant="gradient" gradient={getDataTypeGradient(dataType)}>{dataType}</Badge>
  )
}

export default DataTypeBadge;
