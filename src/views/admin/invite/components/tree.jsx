import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";

import TreeDiagram from "react-d3-tree";
import token from "../../../../assets/img/token.png";
// Custom components
import Card from "../../../../components/card/Card";
// Sample tree data
const treeData = {
  name: "ratantata",
  attributes: {
    name: "Ratan",
    joining: "2024-10-11",
    investment: "22570",
    package: "Standard",
  },
  children: [
    {
      name: "Priya27",
      attributes: {
        name: "Priya27",
        joining: "2024-11-01",
        investment: "10500",
        package: "Basic",
      },
      children: [
        {
          name: "priya31",
          attributes: {
            name: "priya31",
            joining: "2024-11-02",
            investment: "5000",
            package: "Starter",
          },
        },
        {
          name: "priya32",
          attributes: {
            name: "priya32",
            joining: "2024-11-05",
            investment: "8000",
            package: "Standard",
          },
        },
        {
          name: "priya1366",
          attributes: {
            name: "priya1366",
            joining: "2024-11-07",
            investment: "12000",
            package: "Premium",
          },
        },
      ],
    },
    {
      name: "priya28",
      attributes: {
        name: "priya28",
        joining: "2024-11-10",
        investment: "3000",
        package: "Starter",
      },
    },
    {
      name: "priya29",
      attributes: {
        name: "priya29",
        joining: "2024-11-12",
        investment: "4500",
        package: "Basic",
      },
    },
    {
      name: "priya30",
      attributes: {
        name: "priya30",
        joining: "2024-11-13",
        investment: "6000",
        package: "Standard",
      },
    },
    {
      name: "abdevilliers183",
      attributes: {
        name: "abdevilliers183",
        joining: "2024-11-14",
        investment: "10000",
        package: "Premium",
      },
    },
    {
      name: "diljitdosanjh",
      attributes: {
        name: "diljitdosanjh",
        joining: "2024-11-15",
        investment: "7000",
        package: "Basic",
      },
    },
  ],
};

// Recursive tree view (list style)
const TreeNode = ({
  node,
  setTooltip,
  expandedParent = true,
  isLast = false,
  isRoot = true,
}) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {/* Connector lines column */}
      <div
        style={{
          position: "relative",
          width: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Vertical line (only for child nodes, not root) */}
        {expandedParent && !isRoot && (
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: isLast ? "12px" : "0",
              width: 2,
              backgroundColor: "#9F7AEA",
              left: "50%",
            }}
          />
        )}

        {/* Horizontal line (do not render for root node) */}
        {!isRoot && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              width: 12,
              height: 2,
              backgroundColor: "#9F7AEA",
            }}
          />
        )}
      </div>

      {/* Node content */}
      <div style={{ flex: 1 }}>
        <div
          onClick={() => setExpanded(!expanded)}
          onMouseEnter={(e) =>
            setTooltip({
              x: e.clientX,
              y: e.clientY,
              data: {
                name: node.attributes?.name || node.name,
                joining: node.attributes?.joining || "N/A",
                investment: node.attributes?.investment || "N/A",
                package: node.attributes?.package || "Starter",
              },
            })
          }
          onMouseLeave={() => setTooltip(null)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: hasChildren ? "pointer" : "default",
          }}
        >
          {hasChildren && (
            <span
              style={{
                fontSize: "10px",
                color: "#9F7AEA",
                marginRight: 6,
                transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                display: "inline-block",
                width: 10,
              }}
            >
              ▶
            </span>
          )}
          <img
            src={token}
            alt="icon"
            style={{ marginRight: 6, marginLeft: 6, width: 20, height: 20 }}
          />
          <span style={{ color: "#fff", fontSize: "16px" }}>{node.name}</span>
        </div>

        {/* Children */}
        {expanded && hasChildren && (
          <div style={{ marginLeft: 20 }}>
            {node.children.map((child, idx) => (
              <TreeNode
                key={idx}
                node={child}
                setTooltip={setTooltip}
                expandedParent={true}
                isLast={idx === node.children.length - 1}
                isRoot={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Tree() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [view, setView] = useState("level"); // level | tree
  const treeContainer = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (treeContainer.current) {
      const { offsetWidth, offsetHeight } = treeContainer.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  // Custom node with hover tooltip
  const renderCustomNode = ({ nodeDatum }) => {
    return (
      <g
        onMouseEnter={(e) => {
          setTooltip({
            x: e.clientX,
            y: e.clientY,
            data: {
              name: nodeDatum.attributes?.name || nodeDatum.name,
              joining: nodeDatum.attributes?.joining || "N/A",
              investment: nodeDatum.attributes?.investment || "N/A",
              package: nodeDatum.attributes?.package || "Starter",
            },
          });
        }}
        onMouseLeave={() => setTooltip(null)}
      >
        <image
          href={token}
          x="-18"
          y="-18"
          width="36"
          height="36"
          borderRadius="50%"
        />
        <text
          fill="white"
          x="0"
          y="40"
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          {nodeDatum.name}
        </text>
      </g>
    );
  };

  return (
    <Box pt={{ base: "30px", md: "30px", xl: "30px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <Card
          className="customcard"
          align="center"
          justifyContent="space-around"
          direction="column"
          w="100%"
          p="25px"
        >
          <Flex w="100%" justify="space-between" align="center" mb="40px">
            <Box
              as="h2"
              color={textColor}
              m="0"
              fontWeight="bold"
              fontSize={{ md: "22px", sm: "20px" }}
            >
              {view === "level" ? "Level Tree" : "Tree View"}
            </Box>

            <Button
              color={textColor}
              borderRadius="125px"
              px="20px"
              height="38px"
              fontSize="sm"
              className="outlinebtn"
              onClick={() => setView(view === "level" ? "tree" : "level")}
            >
              {view === "level" ? "Tree View" : "Level Tree"}
            </Button>
          </Flex>

          <Box
            ref={treeContainer}
            w="100%"
            h="80vh"
            overflow="auto"
            position="relative"
          >
            {view === "level" ? (
              dimensions.width > 0 && (
                <TreeDiagram
                  data={treeData}
                  translate={{
                    x: dimensions.width / 2,
                    y: dimensions.height / 5, // More spacing from top
                  }}
                  orientation="vertical"
                  pathFunc="step"
                  renderCustomNodeElement={renderCustomNode}
                  zoomable
                  collapsible
                  separation={{ siblings: 1, nonSiblings: 1.5 }}
                  scaleExtent={{ min: 0.5, max: 2 }}
                  nodeSize={{ x: 150, y: 120 }}
                />
              )
            ) : (
              <TreeNode node={treeData} setTooltip={setTooltip} />
            )}

            {tooltip && (
              <Box
                position="fixed"
                top={tooltip.y + 15}
                left={tooltip.x + 15}
                bg="#27272f"
                color="white"
                p="15px"
                borderRadius="8px"
                fontSize="12px"
                textAlign="left"
                zIndex="1000"
                boxShadow="0px 4px 12px rgb(0,0,0)"
              >
                <div>
                  <b>Name:</b> {tooltip.data.name}
                </div>
                <div>
                  <b>Joining:</b> {tooltip.data.joining}
                </div>
                <div>
                  <b>Total Investment:</b> {tooltip.data.investment}
                </div>
                <div>
                  <b>Package:</b> {tooltip.data.package}
                </div>
              </Box>
            )}
          </Box>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
