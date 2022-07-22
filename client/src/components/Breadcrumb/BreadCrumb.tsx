import { BreadcrumbStage } from "../../types";
import Box from "@mui/material/Box";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbNumber,
} from "../StyledComponents";

type BreadcrumbProps = {
  stages: BreadcrumbStage[];
  current: number;
};

const Breadcrumb = ({ stages, current }: BreadcrumbProps) => {
  return (
    <BreadcrumbContainer>
      {stages.map((stage) => (
        <BreadcrumbItem key={stage.name} active={stage.order === current}>
          <BreadcrumbNumber>{stage.order + 1}</BreadcrumbNumber>
          {stage.name}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
