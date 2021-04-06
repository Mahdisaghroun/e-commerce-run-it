import * as React from "react"

function StepHow(props) {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={482}
                  height={298}
                  viewBox="0 0 482 298"
                  {...props}
            >
                  <defs>
                        <filter
                              id="prefix__a"
                              x={62}
                              y={0}
                              width={420}
                              height={298}
                              filterUnits="userSpaceOnUse"
                        >
                              <feOffset dx={4} dy={7} />
                              <feGaussianBlur stdDeviation={8} result="blur" />
                              <feFlood floodOpacity={0.09} />
                              <feComposite operator="in" in2="blur" />
                              <feComposite in="SourceGraphic" />
                        </filter>
                  </defs>
                  <g transform="translate(-712 -506)">
                        <circle
                              data-name="Ellipse 8"
                              cx={34}
                              cy={34}
                              r={34}
                              transform="translate(712 614)"
                              fill="#fc9904"
                        />
                        <circle
                              data-name="Ellipse 9"
                              cx={22}
                              cy={22}
                              r={22}
                              transform="translate(724 626)"
                              fill="#fff"
                        />
                        <text
                              data-name={4}
                              transform="translate(739 660)"
                              fontSize={26}
                              fontFamily="Oswald-Regular, Oswald"
                        >
                              <tspan x={0} y={0}>
                                    {props.number}
                              </tspan>
                        </text>
                        <g transform="translate(712 506)" filter="url(#prefix__a)">
                              <path
                                    data-name="Rectangle 4"
                                    d="M117 17h334a3 3 0 013 3v244a3 3 0 01-3 3H85a3 3 0 01-3-3V52a35 35 0 0135-35z"
                                    fill="#fff"
                              />
                        </g>
                        <text
                              data-name="Attendre jusqu'\xE0 le nombre pr\xE9vu de jetons pour le produit est atteint"
                              transform="translate(827 623)"
                              fontSize={26}
                              fontFamily="Oswald-Regular, Oswald"
                        >
                              <tspan x={0} y={0}>
                                    {props.title1}
                              </tspan>
                              <tspan x={0} y={39}>
                                    {props.title2}
                              </tspan>
                              <tspan x={0} y={78}>
                                    {props.title3}
                              </tspan>
                        </text>
                  </g>
            </svg>
      )
}

export default StepHow
