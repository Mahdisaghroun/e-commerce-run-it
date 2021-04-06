import * as React from "react"
import './Svg.css'
import { useHistory } from "react-router-dom";
import ProgressBar from 'react-animated-progress-bar';
export default function CardProduct(props) {
      const history = useHistory();
      return (

            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={275 + 100}
                  height={335 + 10}
                  viewBox="0 0 275 333"
                  {...props}
                  className="svg"

            >
                  <defs>
                        <filter
                              id="prefix__a"
                              x={0}
                              y={0}
                              width={275}
                              height={335}
                              filterUnits="userSpaceOnUse"
                        >
                              <feOffset dx={3} dy={3} />
                              <feGaussianBlur stdDeviation={5} result="blur" />
                              <feFlood floodOpacity={0.161} />
                              <feComposite operator="in" in2="blur" />
                              <feComposite in="SourceGraphic" />
                        </filter>
                        <filter
                              id="prefix__b"
                              x={137}
                              y={271}
                              width={109}
                              height={45}
                              filterUnits="userSpaceOnUse"
                        >
                              <feOffset dy={3} />
                              <feGaussianBlur stdDeviation={3} result="blur-2" />
                              <feFlood floodOpacity={0.161} />
                              <feComposite operator="in" in2="blur-2" />
                              <feComposite in="SourceGraphic" />
                        </filter>
                  </defs>
                  <g data-name="Group 68">
                        <g data-name="Group 67" transform="translate(12 12)">
                              <g data-name="Group 13">
                                    <g transform="translate(-12 -12)" filter="url(#prefix__a)">
                                          <path
                                                data-name="Rectangle 5"
                                                fill="#fff"
                                                d="M12 12h245v305H12z"
                                          />
                                    </g>
                                    <image
                                          data-name="iPhone+12+mini"
                                          width={154}
                                          height={154}
                                          transform="translate(0 23)"
                                          onClick={
                                                () => history.push("viewproduct")
                                          }
                                          xlinkHref="https://tunisiatech.tn/4672-large_default/promos-smartphones-en-Tunisie-samsung-galaxy-s8-plus.jpg"
                                    />
                              </g>
                              <path data-name="Rectangle 51" fill="#fff" d="M0 187h245v118H0z" />
                              <path
                                    data-name="Path 1"
                                    d="M19.638 242.99c-2.554 0-4.625-2.518-4.625-5.625s2.071-5.625 4.625-5.625 4.625 2.518 4.625 5.625-2.072 5.621-4.625 5.625zm0-9c-1.533 0-2.775 1.511-2.775 3.375s1.242 3.375 2.775 3.375 2.775-1.511 2.775-3.375a3.122 3.122 0 00-2.775-3.375z"
                              />
                              <path
                                    data-name="Path 2"
                                    d="M19.638 251.157l-6.807-8.35q-.142-.188-.28-.378a9.382 9.382 0 01-1.788-5.539 9.059 9.059 0 018.875-9.233 9.059 9.059 0 018.875 9.232 9.378 9.378 0 01-1.787 5.537s-.242.33-.278.375zm-5.8-9.74s.189.258.232.314l5.568 6.831 5.575-6.84c.035-.046.224-.307.225-.307a7.669 7.669 0 001.461-4.525 7.412 7.412 0 00-7.261-7.554 7.412 7.412 0 00-7.261 7.554 7.672 7.672 0 001.461 4.527z"
                              />
                              <text
                                    transform="translate(32 248)"
                                    fontSize={13}
                                    fontFamily="SegoeUI, Segoe UI"
                              >
                                    <tspan x={0} y={0}>
                                          {"Mahdia"}
                                    </tspan>
                              </text>
                              <text
                                    data-name={350}
                                    transform="translate(189 31)"
                                    fill="#fc0000"
                                    fontSize={18}
                                    fontFamily='Oswald'
                                    fontWeight={700}
                              >
                                    <tspan x={0} y={0}>
                                          {"350"}
                                    </tspan>
                              </text>
                              <text
                                    transform="translate(218 19)"
                                    fill="#fc0000"
                                    fontSize={10}
                                    fontFamily='Oswald'
                                    fontWeight={700}
                              >
                                    <tspan x={2} y={0}>
                                          {"DT"}
                                    </tspan>
                              </text>
                              <g transform="translate(-12 -12)" filter="url(#prefix__b)">
                                    <rect
                                          data-name="Rectangle 52"
                                          width={91}
                                          height={27}
                                          rx={13.5}
                                          transform="translate(146 277)"
                                          fill="#fff"
                                          className="btn"
                                          onClick={() => alert("rr")}
                                    />
                              </g>
                              <text

                                    cursor="pointer"
                                    transform="translate(156 284)"
                                    fill="#232f3e"
                                    fontSize={13}
                                    fontFamily='Oswald'
                                    fontWeight={700}
                                    className="btn"
                                    onClick={() => alert("rr")}
                              >
                                    <tspan x={-2} y={0}>
                                          {"Participer"}
                                    </tspan>
                              </text>
                              <g data-name="Group 25">
                                    <g data-name="Rectangle 113" fill="none" stroke="#f8b007">
                                          <path
                                                d="M213 160h6a6 6 0 016 6v83a2 2 0 01-2 2h-14a2 2 0 01-2-2v-83a6 6 0 016-6z"
                                                stroke="none"
                                          />
                                          <path d="M213 160.5h6a5.5 5.5 0 015.5 5.5v83a1.5 1.5 0 01-1.5 1.5h-14a1.5 1.5 0 01-1.5-1.5v-83a5.5 5.5 0 015.5-5.5z" />
                                    </g>
                                    <path
                                          data-name="Path 24"
                                          d="M213.815 185.357h5.04c3.58 0 6.48 3.431 6.48 7.664v57.9h-18v-57.9c0-4.233 2.9-7.664 6.48-7.664z"
                                          fill="#FC9904"
                                    />
                                    <text
                                          data-name="75%"
                                          transform="translate(211 179)"
                                          fill="#FC9904"
                                          fontSize={7}
                                          fontFamily='Oswald'
                                          fontWeight={900}
                                    >
                                          <tspan x={-1} y={0}>
                                                {"75%"}
                                          </tspan>
                                    </text>
                              </g>
                              <image
                                    width={17.75}
                                    height={17.75}
                                    transform="translate(10.763 270.925)"
                                    xlinkHref="data:image/png;base64,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"
                              />
                              <text
                                    data-name={2000}
                                    transform="translate(35 286)"
                                    fill="#FC9904"
                                    fontSize={13}
                                    fontFamily="SegoeUI, Segoe UI"
                              >
                                    <tspan x={0} y={0}>
                                          {"2000"}
                                    </tspan>
                              </text>
                        </g>
                        <text
                              data-name="iPhone X 64Go - Red"
                              transform="translate(25 206)"
                              fontSize={16}
                              fontFamily='Oswald'
                              fontWeight={700}
                        >
                              <tspan x={0} y={0}>
                                    {"iPhone X 64Go - Red"}
                              </tspan>
                        </text>
                        <text
                              data-name="Boutique Hamdi"
                              transform="translate(25 221)"
                              fontSize={10}
                              fontFamily="SegoeUI-LightItalic, Segoe UI"
                              fontWeight={300}
                              fontStyle="italic"
                        >
                              <tspan x={0} y={0}>
                                    {"Boutique Hamdi"}
                              </tspan>
                        </text>
                  </g>
            </svg >

      )
}
