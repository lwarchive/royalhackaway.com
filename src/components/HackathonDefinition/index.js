import React, { Component } from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import { Section } from "../Section"
import {
  hackathonDef,
  header,
  leftText,
  word,
  link,
  pronunciation,
  definition,
} from "./index.module.scss"

class HackathonDefinition extends Component {
  render() {
    return (
      <Section className={hackathonDef} title="We make hackathons happen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center text-md-right">
              <p className={leftText}>
                Royal Hackaway is an initiative of the{" "}
                <a href="https://cmpsc.uk" className={link}>
                  Computing Society at Royal Holloway, University of London
                </a>
                <br />
                <br />
                We aim to create great experiences for students of every
                background of study by hosting inclusive events where people can
                learn and grow.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-left">
              <p className={word}>hackathon</p>
              <p className={pronunciation}>/ˈhækəθɒn/</p>
              <p className={definition}>
                an event, typically lasting several days, in which a large
                number of people meet to engage in collaborative computer
                programming.
              </p>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}

export { HackathonDefinition }
