import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Core Values
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our values dictate our services to our valued clients, including
            innovative cars, long-term collaborations, and excellent customer
            service. Our continuous commitment to our business has cemented our
            reputation as a reliable and trustworthy name.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Transparency
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We prioritize our clients, partners, and team members; therefore, we
            provide high-end services through honest dealings and open
            communication.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Innovation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are dedicated to offering our customers the best quality used and
            brand-new vehicles. Each car is thoroughly inspected and assessed to
            verify its dependability, durability, and general performance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Partnership and Collaboration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We believe that teamwork is the driving force behind every
            successful firm; thus, we cultivate a culture of teamwork and
            coordination while valuing the varied perspectives of our team
            members and partners.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Competence
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have a team of professionals with outstanding skills and
            knowledge dedicated to providing excellence in all our services. Our
            goal is to be exceptionally competent in all of our connections.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ color: "#19315B", fontWeight: "bold" }}>
            Continuous Advancements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are devoted to the advancement and learning in all facets of our
            business. We value input, look for ways to improve, and adapt to the
            changing needs of our clients and the industry. Moral Integrity: We
            operate with the utmost honesty and ethical conduct in our
            commercial interactions. We respect our clients, business partners,
            and colleagues and follow all legal and regulatory requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
