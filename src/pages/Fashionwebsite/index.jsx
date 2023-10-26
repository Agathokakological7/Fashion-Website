import React from "react";

import { Button, Img, Line, List, Text } from "components";

const FashionwebsitePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-green-A100 flex flex-col items-center justify-start p-[53px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-32 items-center justify-start max-w-[1379px] mb-28 mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                  size="txtElephantRegular40"
                >
                  Rivo
                </Text>
                <Text
                  className="md:ml-[0] ml-[377px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[57px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Shop
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Features
                </Text>
                <Text
                  className="md:ml-[0] ml-[47px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Contact
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[184px] w-8"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Button className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[142px] md:ml-[0] ml-[57px] text-center text-xl uppercase">
                  Login
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[22px] w-[48%] md:w-full">
                  <Text
                    className="md:text-5xl text-[86px] text-green-900 w-full"
                    size="txtRufinaBold86"
                  >
                    Discover and Find Your Own Fashion!
                  </Text>
                  <Text
                    className="leading-[220.00%] mt-[27px] text-2xl md:text-[22px] text-green-800 sm:text-xl w-[88%] sm:w-full"
                    size="txtPoppinsMedium24"
                  >
                    Explore our curated collection of stylish clothing and
                    accessories tailored to your unique taste.
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[258px] mt-[54px] text-center text-xl uppercase"
                    color="green_900_01"
                    size="md"
                    variant="fill"
                  >
                    Explore Now
                  </Button>
                </div>
                <div className="bg-green-300 flex h-[717px] justify-end relative rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] w-[42%] md:w-full">
                  <div className="backdrop-opacity-[0.5] bg-black-900_7f blur-[44.00px] h-[138px] ml-auto mr-[155px] mt-auto rounded-[69px] w-[16%]"></div>
                  <div className="absolute h-[717px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[717px] m-auto object-cover rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] w-full"
                      src="images/img_pexelsdimavalkov6402847.png"
                      alt="pexelsdimavalko"
                    />
                    <Img
                      className="absolute bottom-[12%] h-[110px] left-[4%]"
                      src="images/img_group37.svg"
                      alt="groupThirtySeven"
                    />
                    <Img
                      className="absolute h-[110px] right-[2%] top-[22%]"
                      src="images/img_group37.svg"
                      alt="groupThirtyEight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[120px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Best selling
          </Text>
          <Text
            className="mt-[31px] text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            Get in on the trend with our curated selection of best-selling
            styles.
          </Text>
          <List
            className="sm:flex-col flex-row gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1377px] mt-[77px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-300 flex flex-1 flex-col items-center justify-start rounded-[3px] w-full">
              <Img
                className="h-[566px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_pexelsdimavalkov6211621.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-green-200 flex flex-1 flex-col items-center justify-start rounded-[3px] w-full">
              <Img
                className="h-[566px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_pexelsdimavalkov6211616.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-green-100 flex flex-1 flex-col items-center justify-start rounded-[3px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[566px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group21.svg')" }}
              >
                <Img
                  className="h-[566px] md:h-auto object-cover w-full"
                  src="images/img_pexelsdimavalkov6503007.png"
                  alt="pexelsdimavalko"
                />
              </div>
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[159px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1218px] mt-[50px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Regular Fit Long Sleeve Top
                </Text>
                <div className="flex flex-row items-center justify-between w-[74%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Black Crop Tailored Jacket
                </Text>
                <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $62.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.9
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Textured Sunset Shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $49.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] mt-20"
            rightIcon={
              <div className="mt-[17px] mb-[13px] ml-[18px] bg-green-900">
                <Img src="images/img_line_2.svg" alt="Line 2" />
              </div>
            }
            size="sm"
          >
            <div className="font-medium font-poppins leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
              See all
            </div>
          </Button>
          <Text
            className="mt-[190px] sm:text-[40px] md:text-[46px] text-[50px] text-green-900"
            size="txtRobotoSlabMedium50"
          >
            Our products
          </Text>
          <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 gap-[100px] items-start justify-center mt-16 md:px-5 w-[41%] md:w-full">
            <Text
              className="text-[22px] text-gray-800 sm:text-lg md:text-xl uppercase"
              size="txtPoppinsMedium22Gray800"
            >
              Sale
            </Text>
            <div className="flex flex-col items-center justify-start w-[7%] sm:w-full">
              <Text
                className="text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                size="txtPoppinsMedium22"
              >
                HOT
              </Text>
              <Line className="bg-green-900 h-0.5 mt-[3px] w-full" />
            </div>
            <Text
              className="text-[22px] text-gray-800 sm:text-lg md:text-xl uppercase"
              size="txtPoppinsMedium22Gray800"
            >
              New Arrivals
            </Text>
            <Text
              className="text-[22px] text-gray-800 sm:text-lg md:text-xl uppercase"
              size="txtPoppinsMedium22Gray800"
            >
              Accessories
            </Text>
          </div>
          <div className="gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start max-w-[1377px] mt-[78px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-full"
                src="images/img_pexelsdimavalkov6402848.png"
                alt="pexelsdimavalko_One"
              />
            </div>
            <div className="bg-blue_gray-50 flex flex-1 flex-col items-center justify-start px-[11px] w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-[97%]"
                src="images/img_pexelsheitorverdi7665789.png"
                alt="pexelsheitorver"
              />
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-center justify-end py-0.5 w-full">
              <Img
                className="h-[356px] md:h-auto mt-[18px] object-cover w-full"
                src="images/img_pexelsdimavalkov6511777.png"
                alt="pexelsdimavalko_Two"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-full"
                src="images/img_pexelsmonstera6311613.png"
                alt="pexelsmonsteraSix"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1321px] mt-[35px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Spread Collar Shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $48.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  White Solid Formal Shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-[84%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $39.00
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.9
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Shine On Me Blouse
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $42.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.8
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Gray Solid Padded Jacket
                </Text>
                <div className="flex flex-row items-center justify-between w-[78%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $32.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[11px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.7
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1377px] mt-[82px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-full"
                src="images/img_pexelsdimavalkov6211614.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-full"
                src="images/img_pexelsdimavalkov6402846.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[378px] md:h-auto object-cover w-full"
                src="images/img_pexelsdimavalkov6211601.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-gray-300 flex flex-1 flex-col items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[378px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group22.svg')" }}
              >
                <Img
                  className="h-[378px] md:h-auto object-cover w-full"
                  src="images/img_pexelsmonstera6311612.png"
                  alt="pexelsmonsteraSix"
                />
              </div>
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[93px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1317px] mt-[35px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Printed Loose T-shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $39.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Summer Wind Crop Shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-[81%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $39.95
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[11px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.7
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Tailored Jacket
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $46.00
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.9
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Solid Round Neck T-shirt
                </Text>
                <div className="flex flex-row items-center justify-between w-[82%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $36.00
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-green-A100 flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-start max-w-[1377px] mt-[195px] mx-auto md:px-5 px-[41px] rounded-[3px] w-full">
            <div className="h-[596px] relative w-[41%] md:w-full">
              <div className="absolute bottom-[7%] md:h-[131px] h-[151px] left-[0] w-[48%]">
                <div className="absolute bg-green-50_7f h-[131px] right-[0] top-[0] w-[77%]"></div>
                <Img
                  className="absolute bottom-[0] h-[110px] left-[0]"
                  src="images/img_group37_green_700.svg"
                  alt="groupThirtySeven_One"
                />
              </div>
              <Img
                className="absolute h-[596px] inset-y-[0] my-auto object-cover right-[0] w-[93%]"
                src="images/img_excitedwhiteg.png"
                alt="excitedwhiteg"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-green-900"
                  size="txtRobotoSlabBold46"
                >
                  Exclusive offer
                </Text>
                <Text
                  className="mt-5 text-[22px] text-green-900 sm:text-lg md:text-xl w-full"
                  size="txtPoppinsMedium22"
                >
                  Unlock the ultimate style upgrade with our exclusive offer
                  Enjoy savings of up to 40% off on our latest New Arrivals
                </Text>
                <div className="flex flex-row font-poppins gap-[35px] items-center justify-start mt-10 w-[63%] md:w-full">
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-end p-3.5 rounded-[3px] shadow-bs w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      06
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-end p-[15px] rounded-[3px] shadow-bs w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      18
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Hours
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start p-[15px] rounded-[3px] shadow-bs w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      48
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Min
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[235px] mt-[41px] text-center text-xl uppercase"
                  size="md"
                  variant="fill"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="mt-[223px] sm:text-[40px] md:text-[46px] text-[50px] text-green-900"
            size="txtRobotoSlabMedium50"
          >
            Designer Clothes For You
          </Text>
          <Text
            className="mt-[47px] text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!
          </Text>
          <List
            className="sm:flex-col flex-row gap-11 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1377px] mt-[69px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-100_01 flex flex-1 flex-col items-center justify-end pt-3 px-3 rounded-[3px] w-full">
              <Img
                className="h-[534px] md:h-auto mt-5 object-cover w-full"
                src="images/img_elegantwomans.png"
                alt="elegantwomans"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-[3px] w-full">
              <Img
                className="h-[566px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_pexelsdimavalkov6211617.png"
                alt="pexelsdimavalko"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-[3px] w-full">
              <Img
                className="h-[566px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_vknivfusdkvbjieurg.png"
                alt="vknivfusdkvbjie"
              />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-center justify-between max-w-[1111px] mt-[23px] mx-auto md:px-5 w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
              size="txtPoppinsSemiBold30"
            >
              Accessories
            </Text>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtPoppinsSemiBold30"
            >
              Dresses
            </Text>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
              size="txtPoppinsSemiBold30"
            >
              Outerwear
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start max-w-[1367px] mt-1 mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[143.00%] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl w-[31%] sm:w-full"
              size="txtPoppinsMedium22Bluegray900"
            >
              Complete your ensemble with designer accessories such as handbags,
              scarves, belts, and hats.
            </Text>
            <Text
              className="sm:flex-1 leading-[143.00%] sm:ml-[0] ml-[53px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl w-[31%] sm:w-full"
              size="txtPoppinsMedium22Bluegray900"
            >
              Explore a stunning range of designer dresses, including evening
              gowns and chic day dresses.
            </Text>
            <Text
              className="sm:flex-1 leading-[143.00%] sm:ml-[0] ml-[54px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl w-[31%] sm:w-full"
              size="txtPoppinsMedium22Bluegray900"
            >
              Browse luxurious designer coats, jackets, and blazers to stay
              stylishly warm during colder seasons.
            </Text>
          </div>
          <Text
            className="mt-[249px] sm:text-[40px] md:text-[46px] text-[50px] text-green-900"
            size="txtRobotoSlabMedium50"
          >
            Feedback Corner
          </Text>
          <List
            className="sm:flex-col flex-row font-arialroundedmtbold gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1377px] mt-[102px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="md:h-[252px] h-[258px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col gap-[27px] h-max inset-[0] items-start justify-center m-auto p-[19px] rounded-[3px] shadow-bs w-full">
                <Text
                  className="mt-[55px] text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Emily Wilson
                </Text>
                <Text
                  className="mb-2.5 text-base text-gray-600 w-[99%] sm:w-full"
                  size="txtPoppinsMedium16Gray600"
                >
                  <>
                    The customer experience was exceptional from start to
                    finish. The website is user-friendly, the checkout process
                    was smooth, and the clothes I ordered fit perfectly. I&#39;m
                    beyond satisfied!
                  </>
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtArialRoundedMTBold60"
              >
                “
              </Text>
            </div>
            <div className="md:h-[252px] h-[258px] relative w-full">
              <div className="absolute bg-green-A100 flex flex-col gap-[27px] h-max inset-[0] items-start justify-center m-auto p-4 rounded-[3px] shadow-bs w-full">
                <Text
                  className="mt-[58px] text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Sarah Thompson
                </Text>
                <Text
                  className="mb-[13px] text-base text-green-900 w-full"
                  size="txtPoppinsMedium16"
                >
                  I absolutely love the quality and style of the clothing I
                  purchased from this website. customer service was outstanding,
                  and I received my order quickly. Highly recommended!
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtArialRoundedMTBold60"
              >
                “
              </Text>
            </div>
            <div className="md:h-[252px] h-[258px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col gap-[26px] h-max inset-[0] items-start justify-center m-auto p-[19px] rounded-[3px] shadow-bs w-full">
                <Text
                  className="mt-14 text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Olivia Martinez
                </Text>
                <Text
                  className="mb-[34px] text-base text-gray-600 w-full"
                  size="txtPoppinsMedium16Gray600"
                >
                  I had a great experience shopping on this website. The clothes
                  I bought are fashionable and comfortable. Highly satisfied!
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtArialRoundedMTBold60"
              >
                “
              </Text>
            </div>
          </List>
          <div className="flex flex-row gap-[51px] items-center justify-center mt-[125px] md:px-5 w-[8%] md:w-full">
            <Button
              className="flex h-10 items-center justify-center w-10"
              color="white_A700"
              variant="fill"
            >
              <Img src="images/img_arrowleft.svg" alt="arrowleft" />
            </Button>
            <Button
              className="flex h-10 items-center justify-center w-10"
              color="green_A100"
              variant="fill"
            >
              <Img src="images/img_arrowright.svg" alt="arrowright" />
            </Button>
          </div>
          <footer className="bg-green-900 flex font-robotoslab items-center justify-center mt-[193px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center ml-[172px] mr-[175px] my-[79px] w-4/5">
              <div className="flex flex-col md:gap-10 gap-[151px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <ul className="flex md:flex-1 flex-col items-start justify-start w-[10%] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="ml-0.5 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                      >
                        <Text size="txtElephantRegular50">Rivo</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize ml-0.5 md:ml-[0] mt-[43px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      >
                        <Text size="txtRobotoSlabMedium22">Social Media</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-9 items-center justify-start mt-[23px]">
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <Img
                    className="h-[38px] ml-2 md:ml-[0] md:mt-0 mt-[159px] w-[38px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                  <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[217px] md:mt-0 mt-[26px] w-[7%] md:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase"
                      size="txtRobotoSlabMedium22"
                    >
                      SHOP
                    </Text>
                    <ul className="flex flex-col font-poppins items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Products</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[17px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Overview</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-5 text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Pricing</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[15px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Releases</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start ml-36 md:ml-[0] md:mt-0 mt-[26px] w-[9%] md:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase"
                      size="txtRobotoSlabMedium22"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col font-poppins items-start justify-start md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">About us</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[18px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Contact</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[18px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">News</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-5 text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20">Support</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-9 items-start justify-start ml-36 md:ml-[0] md:mt-0 mt-[26px] w-[36%] md:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase"
                      size="txtRobotoSlabMedium22"
                    >
                      Stay up to date
                    </Text>
                    <div className="flex font-poppins h-[57px] justify-end relative w-full">
                      <Text
                        className="mb-[11px] ml-7 mt-auto text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        Enter your email
                      </Text>
                      <div className="absolute border-2 border-green-A100_01 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[372px] rounded-[3px] w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[115px] text-center text-xl uppercase"
                          shape="square"
                          color="green_A100_01"
                          variant="fill"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between w-full">
                  <Line className="bg-green-A100_01 h-0.5 sm:mt-0 my-3.5 w-[77%]" />
                  <Text
                    className="capitalize text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Terms
                  </Text>
                  <a
                    href="javascript:"
                    className="capitalize sm:mt-0 mt-0.5 text-white-A700 text-xl"
                  >
                    <Text size="txtPoppinsSemiBold20">Privacy</Text>
                  </a>
                  <Text
                    className="capitalize mb-0.5 text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Cookies
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FashionwebsitePage;
