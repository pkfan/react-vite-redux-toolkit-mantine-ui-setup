/**
 * author - PKFAN
 * version - 1.0.0
 *
 * MUI does not provide (sx) styling props for custom html element
 * (e.g h1, div, span, a, header, footer etc)
 *
 * So this file contains most common html element with MUI SX props styling
 *
 * remeber all html element is in capatilize form after (sx) props decorator
 * e.g. a -> A, div -> Div, span -> Span, header -> Header
 *
 */

import { styled, unstable_styleFunctionSx } from "@mui/system";

// sx decorator pattern
function provideSXprop(element) {
  return styled(element)(unstable_styleFunctionSx);
}

//html elememts list with (sx) props of MUI style system

// Formatting
export const P = provideSXprop("p");
export const Blockquote = provideSXprop("blockquote");
export const Div = provideSXprop("div");
export const Span = provideSXprop("span");

// Links
export const A = provideSXprop("a");

// Lists
export const Ul = provideSXprop("ul");
export const Ol = provideSXprop("ol");
export const Li = provideSXprop("li");
export const Dl = provideSXprop("dl");
export const Dt = provideSXprop("dt");
export const Dd = provideSXprop("dd");

// Text Tags
export const Pre = provideSXprop("pre");
export const H1 = provideSXprop("h1");
export const H2 = provideSXprop("h2");
export const H3 = provideSXprop("h3");
export const H4 = provideSXprop("h4");
export const H5 = provideSXprop("h5");
export const H6 = provideSXprop("h6");
export const Code = provideSXprop("code");
export const Cite = provideSXprop("cite");
export const Address = provideSXprop("address");

// Graphical elements
export const Img = provideSXprop("img");

// Forms
export const Form = provideSXprop("form");
export const Input = provideSXprop("input");
export const Select = provideSXprop("select");
export const Option = provideSXprop("option");
export const Textarea = provideSXprop("textarea");

// Tables
export const Table = provideSXprop("table");
export const Tr = provideSXprop("tr");
export const Td = provideSXprop("td");
export const Th = provideSXprop("th");

// Semantic Elements
export const Article = provideSXprop("article");
export const Aside = provideSXprop("aside");
export const Details = provideSXprop("details");
export const Figcaption = provideSXprop("figcaption");
export const Figure = provideSXprop("figure");
export const Footer = provideSXprop("footer");
export const Header = provideSXprop("header");
export const Main = provideSXprop("main");
export const Mark = provideSXprop("mark");
export const Nav = provideSXprop("nav");
export const Section = provideSXprop("section");
export const Summary = provideSXprop("summary");
export const Time = provideSXprop("time");

// Embedding media
export const Video = provideSXprop("video");
export const Audio = provideSXprop("audio");
export const Embed = provideSXprop("embed");
export const Source = provideSXprop("source ");

// iframe
export const Iframe = provideSXprop("iframe ");
