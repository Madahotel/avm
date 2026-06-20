/* ═══════════════════════════════════════════
   Exporters Page — Exportateurs agréés
   ═══════════════════════════════════════════ */

import { useState } from "react"
import { useTranslation } from "@/contexts/LanguageContext"
import { Award, Search } from "lucide-react"

interface Exporter { id: string; name: string; city: string; region: string; status: string; since: string; specialty: string }

const EXPORTERS: Exporter[] = [
  { id: "EXP-001", name: "Joseph Randrianantenaina", city: "Sambava", region: "SAVA", status: "Actif", since: "2014", specialty: "Vanille rouge" },
  { id: "EXP-002", name: "Rabeasimbola Razanajaona", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2012", specialty: "Vanille bio" },
  { id: "EXP-003", name: "Yvonne Rabemananjara", city: "Port-Berge", region: "SOFIA", status: "Actif", since: "2016", specialty: "Vanille fendue" },
  { id: "EXP-004", name: "Rajoelina Rakotobe", city: "Anjozorobe", region: "Analamanga", status: "Actif", since: "2010", specialty: "Vanille cuts" },
  { id: "EXP-005", name: "Razafindrabe Razafimahatratra", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2016", specialty: "Vanille premium" },
  { id: "EXP-006", name: "Albert Andrianarivelo", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2021", specialty: "Vanille TK" },
  { id: "EXP-007", name: "Robert Razafindramanga", city: "Amboasary", region: "Anosy", status: "Actif", since: "2022", specialty: "Vanille rouge" },
  { id: "EXP-008", name: "Rakotoniaina Razanakoto", city: "Vohemar", region: "SAVA", status: "En attente", since: "2021", specialty: "Vanille TK" },
  { id: "EXP-009", name: "Rakotomalala Rajoelina", city: "Ambanja", region: "DIANA", status: "Actif", since: "2017", specialty: "Vanille noire gourmet" },
  { id: "EXP-010", name: "Ravalomanana Razanadrakoto", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2024", specialty: "Vanille premium" },
  { id: "EXP-011", name: "Rasoloniaina Rasamimanana", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2018", specialty: "Vanille rouge" },
  { id: "EXP-012", name: "Rasolonjatovo Razafindrakoto", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2017", specialty: "Vanille cuts" },
  { id: "EXP-013", name: "Rakotonirina Randrianantenaina", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Suspendu", since: "2017", specialty: "Vanille premium" },
  { id: "EXP-014", name: "Ravalomanana Andriamampianina", city: "Fort-Dauphin", region: "Anosy", status: "En attente", since: "2022", specialty: "Vanille noire gourmet" },
  { id: "EXP-015", name: "Razafindrakoto Rakotoniary", city: "Sambava", region: "SAVA", status: "En attente", since: "2020", specialty: "Vanille bio" },
  { id: "EXP-016", name: "Rabeasimbola Rajoelisolo", city: "Ankarana", region: "DIANA", status: "Actif", since: "2018", specialty: "Vanille cuts" },
  { id: "EXP-017", name: "Danielle Ravoniarivo", city: "Port-Berge", region: "SOFIA", status: "Actif", since: "2023", specialty: "Vanille TK" },
  { id: "EXP-018", name: "Randrianarisoa Rakotondrazaka", city: "Anjozorobe", region: "Analamanga", status: "Suspendu", since: "2014", specialty: "Vanille fendue" },
  { id: "EXP-019", name: "Albert Rasamoelina", city: "Mananara Nord", region: "Analanjirofo", status: "En attente", since: "2014", specialty: "Vanille cuts" },
  { id: "EXP-020", name: "Randrianarisoa Rajoelina", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2024", specialty: "Vanille fendue" },
  { id: "EXP-021", name: "Josette Rakotoarisoa", city: "Amboasary", region: "Anosy", status: "Actif", since: "2013", specialty: "Vanille fendue" },
  { id: "EXP-022", name: "Andriamanjato Razafimahatratra", city: "Vohemar", region: "SAVA", status: "Actif", since: "2023", specialty: "Vanille cuts" },
  { id: "EXP-023", name: "Jean Rabeasimbola", city: "Ankarana", region: "DIANA", status: "Suspendu", since: "2015", specialty: "Vanille fendue" },
  { id: "EXP-024", name: "Rakotoniaina Rakotonirina", city: "Antsohihy", region: "SOFIA", status: "En attente", since: "2016", specialty: "Vanille cuts" },
  { id: "EXP-025", name: "Rakoto Ravoniarivo", city: "Anjozorobe", region: "Analamanga", status: "Suspendu", since: "2010", specialty: "Vanille TK" },
  { id: "EXP-026", name: "Marguerite Rabe", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2021", specialty: "Vanille noire gourmet" },
  { id: "EXP-027", name: "Louis Ravelojaona", city: "Betioy", region: "Atsimo-Andrefana", status: "En attente", since: "2012", specialty: "Vanille rouge" },
  { id: "EXP-028", name: "Marguerite Rajoelina", city: "Betroka", region: "Anosy", status: "Suspendu", since: "2014", specialty: "Vanille cuts" },
  { id: "EXP-029", name: "Josette Razafindrakoto", city: "Andapa", region: "SAVA", status: "Actif", since: "2023", specialty: "Vanille bio" },
  { id: "EXP-030", name: "Andriamampianina Rakotonirina", city: "Ambanja", region: "DIANA", status: "Actif", since: "2021", specialty: "Vanille verte preparee" },
  { id: "EXP-031", name: "Philippe Ravelojaona", city: "Analalava", region: "SOFIA", status: "Actif", since: "2020", specialty: "Vanille noire" },
  { id: "EXP-032", name: "Josette Rakotondrazaka", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2010", specialty: "Vanille rouge" },
  { id: "EXP-033", name: "Rakotoniaina Rasamoelina", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2011", specialty: "Vanille premium" },
  { id: "EXP-034", name: "Berthe Ravelojaona", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2025", specialty: "Vanille bio" },
  { id: "EXP-035", name: "Michel Rakotoniary", city: "Betroka", region: "Anosy", status: "Actif", since: "2017", specialty: "Vanille verte preparee" },
  { id: "EXP-036", name: "Rakotomalala Razanadrakoto", city: "Andapa", region: "SAVA", status: "Actif", since: "2023", specialty: "Vanille premium" },
  { id: "EXP-037", name: "Rasamoelina Razafindramanga", city: "Ankarana", region: "DIANA", status: "En attente", since: "2011", specialty: "Vanille rouge" },
  { id: "EXP-038", name: "Rakotoarivelo Razafimahatratra", city: "Antsohihy", region: "SOFIA", status: "En attente", since: "2013", specialty: "Vanille bio" },
  { id: "EXP-039", name: "Rakotomalala Ravoniarivo", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2023", specialty: "Vanille cuts" },
  { id: "EXP-040", name: "Lucie Ravelojaona", city: "Mananara Nord", region: "Analanjirofo", status: "En attente", since: "2012", specialty: "Vanille verte preparee" },
  { id: "EXP-041", name: "Jacques Rajoelisolo", city: "Toliara", region: "Atsimo-Andrefana", status: "Suspendu", since: "2010", specialty: "Vanille rouge" },
  { id: "EXP-042", name: "Rabe Rakotovao", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2016", specialty: "Vanille noire et rouge" },
  { id: "EXP-043", name: "Rabe Andrianarivelo", city: "Sambava", region: "SAVA", status: "Actif", since: "2022", specialty: "Vanille noire gourmet" },
  { id: "EXP-044", name: "Andrianarivelo Razanajaona", city: "Ankarana", region: "DIANA", status: "Actif", since: "2025", specialty: "Vanille cuts" },
  { id: "EXP-045", name: "Ratsimandrava Razafindrabe", city: "Port-Berge", region: "SOFIA", status: "Suspendu", since: "2011", specialty: "Vanille premium" },
  { id: "EXP-046", name: "Jacques Randrianampoinimerina", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2015", specialty: "Vanille noire" },
  { id: "EXP-047", name: "Raymond Rasolonjatovo", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2012", specialty: "Vanille bio" },
  { id: "EXP-048", name: "Philippe Rakotoniary", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2011", specialty: "Vanille TK" },
  { id: "EXP-049", name: "Andrianasolo Rakotoarivelo", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2020", specialty: "Vanille noire gourmet" },
  { id: "EXP-050", name: "Rakotovao Rasamimanana", city: "Antalaha", region: "SAVA", status: "Actif", since: "2018", specialty: "Vanille noire et rouge" },
  { id: "EXP-051", name: "Rakotovao Rajoelisolo", city: "Ambanja", region: "DIANA", status: "Actif", since: "2020", specialty: "Vanille rouge" },
  { id: "EXP-052", name: "Claire Razanakoto", city: "Antsohihy", region: "SOFIA", status: "Suspendu", since: "2013", specialty: "Vanille rouge" },
  { id: "EXP-053", name: "Razafindrakoto Rakotomalala", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2021", specialty: "Vanille rouge" },
  { id: "EXP-054", name: "Rasoloniaina Rasoloniaina", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2019", specialty: "Vanille TK" },
  { id: "EXP-055", name: "Rakotovao Rasolofomba", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2013", specialty: "Vanille cuts" },
  { id: "EXP-056", name: "Patrick Razanadrakoto", city: "Amboasary", region: "Anosy", status: "Actif", since: "2014", specialty: "Vanille noire gourmet" },
  { id: "EXP-057", name: "Rasamoelina Razafindrabe", city: "Vohemar", region: "SAVA", status: "Actif", since: "2016", specialty: "Vanille noire gourmet" },
  { id: "EXP-058", name: "Ramaroson Rasamoelina", city: "Ankarana", region: "DIANA", status: "Actif", since: "2023", specialty: "Vanille noire gourmet" },
  { id: "EXP-059", name: "Jean Razafimahatratra", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2018", specialty: "Vanille cuts" },
  { id: "EXP-060", name: "Marie Rasolofomba", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2010", specialty: "Vanille rouge" },
  { id: "EXP-061", name: "Randrianantenaina Rasolofonirina", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2021", specialty: "Vanille TK" },
  { id: "EXP-062", name: "Rakotondrazaka Randrianarisoa", city: "Betioy", region: "Atsimo-Andrefana", status: "Actif", since: "2021", specialty: "Vanille noire" },
  { id: "EXP-063", name: "Randrianarison Andrianampoinimerina", city: "Amboasary", region: "Anosy", status: "Actif", since: "2013", specialty: "Vanille premium" },
  { id: "EXP-064", name: "Razafindrakoto Rasolofonirina", city: "Andapa", region: "SAVA", status: "En attente", since: "2017", specialty: "Vanille cuts" },
  { id: "EXP-065", name: "Rasamoelina Rabe", city: "Ambanja", region: "DIANA", status: "Actif", since: "2020", specialty: "Vanille noire et rouge" },
  { id: "EXP-066", name: "Rakotovao Razafindrakoto", city: "Port-Berge", region: "SOFIA", status: "Actif", since: "2013", specialty: "Vanille noire et rouge" },
  { id: "EXP-067", name: "Rose Rakotondrazaka", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2024", specialty: "Vanille premium" },
  { id: "EXP-068", name: "Ravalomanana Rakotondrazaka", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2016", specialty: "Vanille noire et rouge" },
  { id: "EXP-069", name: "Harison Rajoelina", city: "Ankazoabo", region: "Atsimo-Andrefana", status: "Suspendu", since: "2018", specialty: "Vanille premium" },
  { id: "EXP-070", name: "Berthe Ratsimandrava", city: "Betroka", region: "Anosy", status: "Actif", since: "2020", specialty: "Vanille noire" },
  { id: "EXP-071", name: "Razanajaona Rasolonjatovo", city: "Sambava", region: "SAVA", status: "Actif", since: "2018", specialty: "Vanille noire" },
  { id: "EXP-072", name: "Randrianarisoa Razanajaona", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2020", specialty: "Vanille noire et rouge" },
  { id: "EXP-073", name: "Randrianantenaina Rakotoniary", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2011", specialty: "Vanille noire et rouge" },
  { id: "EXP-074", name: "Simone Ravoniarivo", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2016", specialty: "Vanille premium" },
  { id: "EXP-075", name: "Henri Rakotoarivelo", city: "Mananara Nord", region: "Analanjirofo", status: "En attente", since: "2020", specialty: "Vanille rouge" },
  { id: "EXP-076", name: "Yvonne Rakotonirina", city: "Ankazoabo", region: "Atsimo-Andrefana", status: "Actif", since: "2020", specialty: "Vanille noire et rouge" },
  { id: "EXP-077", name: "Ratsimandrava Rasolofomba", city: "Betroka", region: "Anosy", status: "Actif", since: "2023", specialty: "Vanille noire et rouge" },
  { id: "EXP-078", name: "Ravoahangy Rakotoniary", city: "Antalaha", region: "SAVA", status: "Actif", since: "2010", specialty: "Vanille noire gourmet" },
  { id: "EXP-079", name: "Randrianarison Razanajaona", city: "Ambilobe", region: "DIANA", status: "Actif", since: "2020", specialty: "Vanille verte preparee" },
  { id: "EXP-080", name: "Marie Andrianampoinimerina", city: "Analalava", region: "SOFIA", status: "Actif", since: "2025", specialty: "Vanille cuts" },
  { id: "EXP-081", name: "Raymond Rasoloniaina", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2020", specialty: "Vanille rouge" },
  { id: "EXP-082", name: "Razanadrakoto Rakotonirina", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2016", specialty: "Vanille cuts" },
  { id: "EXP-083", name: "Robert Ravelojaona", city: "Toliara", region: "Atsimo-Andrefana", status: "Suspendu", since: "2012", specialty: "Vanille verte preparee" },
  { id: "EXP-084", name: "Rakotoniaina Rakotoniary", city: "Amboasary", region: "Anosy", status: "Actif", since: "2022", specialty: "Vanille verte preparee" },
  { id: "EXP-085", name: "Rakotobe Rasolofonirina", city: "Andapa", region: "SAVA", status: "Actif", since: "2010", specialty: "Vanille rouge" },
  { id: "EXP-086", name: "Rajoelina Rasolonjatovo", city: "Ankarana", region: "DIANA", status: "En attente", since: "2024", specialty: "Vanille noire" },
  { id: "EXP-087", name: "Philippe Razafindramanga", city: "Port-Berge", region: "SOFIA", status: "Actif", since: "2024", specialty: "Vanille fendue" },
  { id: "EXP-088", name: "Randrianarisoa Ramaroson", city: "Manjakandriana", region: "Analamanga", status: "Suspendu", since: "2024", specialty: "Vanille TK" },
  { id: "EXP-089", name: "Yvonne Razanajaona", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "En attente", since: "2024", specialty: "Vanille cuts" },
  { id: "EXP-090", name: "Jeanne Rabeasimbola", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2018", specialty: "Vanille fendue" },
  { id: "EXP-091", name: "Rakotoniaina Ravelojaona", city: "Amboasary", region: "Anosy", status: "Actif", since: "2012", specialty: "Vanille noire gourmet" },
  { id: "EXP-092", name: "Rakotovao Razafimahatratra", city: "Antalaha", region: "SAVA", status: "Actif", since: "2012", specialty: "Vanille cuts" },
  { id: "EXP-093", name: "Ravalomanana Andrianarivelo", city: "Ambanja", region: "DIANA", status: "Actif", since: "2016", specialty: "Vanille rouge" },
  { id: "EXP-094", name: "Rasamoelina Razafimahatratra", city: "Analalava", region: "SOFIA", status: "Actif", since: "2023", specialty: "Vanille noire" },
  { id: "EXP-095", name: "Andrianasolo Andrianarivelo", city: "Antananarivo", region: "Analamanga", status: "En attente", since: "2010", specialty: "Vanille TK" },
  { id: "EXP-096", name: "Anne Rakotoarisoa", city: "Mananara Nord", region: "Analanjirofo", status: "En attente", since: "2019", specialty: "Vanille noire et rouge" },
  { id: "EXP-097", name: "Monique Ravoniarivo", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2017", specialty: "Vanille verte preparee" },
  { id: "EXP-098", name: "Rakotovao Razanajaona", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2022", specialty: "Vanille premium" },
  { id: "EXP-099", name: "Rasolofonirina Razafindrakoto", city: "Andapa", region: "SAVA", status: "En attente", since: "2014", specialty: "Vanille TK" },
  { id: "EXP-100", name: "Rabeasimbola Randrianampoinimerina", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2010", specialty: "Vanille rouge" },
  { id: "EXP-101", name: "Bernard Razafindramanga", city: "Analalava", region: "SOFIA", status: "Actif", since: "2018", specialty: "Vanille noire et rouge" },
  { id: "EXP-102", name: "Razafindrakoto Razafindramanga", city: "Anjozorobe", region: "Analamanga", status: "Actif", since: "2022", specialty: "Vanille noire gourmet" },
  { id: "EXP-103", name: "Ramaroson Ravalomanana", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2011", specialty: "Vanille premium" },
  { id: "EXP-104", name: "Raveloarisoa Rajoelina", city: "Betioy", region: "Atsimo-Andrefana", status: "Actif", since: "2011", specialty: "Vanille noire" },
  { id: "EXP-105", name: "Rasolofonirina Rabe", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2017", specialty: "Vanille cuts" },
  { id: "EXP-106", name: "Rakotovao Rakotomalala", city: "Andapa", region: "SAVA", status: "Actif", since: "2016", specialty: "Vanille verte preparee" },
  { id: "EXP-107", name: "Rasoloniaina Razafindrakoto", city: "Ambilobe", region: "DIANA", status: "Actif", since: "2013", specialty: "Vanille cuts" },
  { id: "EXP-108", name: "Francois Randrianampoinimerina", city: "Mampikony", region: "SOFIA", status: "Actif", since: "2019", specialty: "Vanille TK" },
  { id: "EXP-109", name: "Rakotonirina Ratsimandrava", city: "Manjakandriana", region: "Analamanga", status: "En attente", since: "2016", specialty: "Vanille rouge" },
  { id: "EXP-110", name: "Randrianantenaina Rasamoela", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2019", specialty: "Vanille TK" },
  { id: "EXP-111", name: "Sylvie Andriamampianina", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2023", specialty: "Vanille premium" },
  { id: "EXP-112", name: "Yvonne Rajoelisolo", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2023", specialty: "Vanille verte preparee" },
  { id: "EXP-113", name: "Rakotondrazaka Rafalimanana", city: "Sambava", region: "SAVA", status: "Actif", since: "2024", specialty: "Vanille cuts" },
  { id: "EXP-114", name: "Radria Andriamanjato", city: "Ankarana", region: "DIANA", status: "Suspendu", since: "2018", specialty: "Vanille TK" },
  { id: "EXP-115", name: "Lucie Razanajaona", city: "Analalava", region: "SOFIA", status: "En attente", since: "2018", specialty: "Vanille premium" },
  { id: "EXP-116", name: "Albert Randrianantenaina", city: "Antananarivo", region: "Analamanga", status: "En attente", since: "2017", specialty: "Vanille verte preparee" },
  { id: "EXP-117", name: "Ravoahangy Rakotoarivelo", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2010", specialty: "Vanille verte preparee" },
  { id: "EXP-118", name: "Rasamoelina Rasolonjato", city: "Ankazoabo", region: "Atsimo-Andrefana", status: "Actif", since: "2018", specialty: "Vanille premium" },
  { id: "EXP-119", name: "Randrianarisoa Ravelonjanahary", city: "Amboasary", region: "Anosy", status: "En attente", since: "2010", specialty: "Vanille fendue" },
  { id: "EXP-120", name: "Raymond Ravelojaona", city: "Antalaha", region: "SAVA", status: "Actif", since: "2025", specialty: "Vanille fendue" },
  { id: "EXP-121", name: "Randrianantenaina Raveloarisoa", city: "Ambanja", region: "DIANA", status: "Actif", since: "2025", specialty: "Vanille verte preparee" },
  { id: "EXP-122", name: "Albert Rasoloniaina", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2017", specialty: "Vanille noire gourmet" },
  { id: "EXP-123", name: "Rakotomalala Rafalimanana", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2021", specialty: "Vanille noire et rouge" },
  { id: "EXP-124", name: "Josette Razafimahatratra", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2024", specialty: "Vanille noire gourmet" },
  { id: "EXP-125", name: "Ramaroson Rakotondrazaka", city: "Ankazoabo", region: "Atsimo-Andrefana", status: "Actif", since: "2016", specialty: "Vanille premium" },
  { id: "EXP-126", name: "Monique Ravelonjanahary", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2016", specialty: "Vanille verte preparee" },
  { id: "EXP-127", name: "Rasolofonirina Randrianampoinimerina", city: "Vohemar", region: "SAVA", status: "Suspendu", since: "2019", specialty: "Vanille rouge" },
  { id: "EXP-128", name: "Ratsimandrava Rakotondrazaka", city: "Ambanja", region: "DIANA", status: "Actif", since: "2019", specialty: "Vanille noire" },
  { id: "EXP-129", name: "Harison Andriamampianina", city: "Port-Berge", region: "SOFIA", status: "Suspendu", since: "2019", specialty: "Vanille cuts" },
  { id: "EXP-130", name: "Marguerite Razanadrakoto", city: "Manjakandriana", region: "Analamanga", status: "En attente", since: "2019", specialty: "Vanille verte preparee" },
  { id: "EXP-131", name: "Marie Razafimahatratra", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2011", specialty: "Vanille noire gourmet" },
  { id: "EXP-132", name: "Patrick Rajoelina", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2012", specialty: "Vanille TK" },
  { id: "EXP-133", name: "Rasoloniaina Rasamoelina", city: "Betroka", region: "Anosy", status: "Actif", since: "2019", specialty: "Vanille rouge" },
  { id: "EXP-134", name: "Philippe Rasolofomba", city: "Antalaha", region: "SAVA", status: "Actif", since: "2017", specialty: "Vanille fendue" },
  { id: "EXP-135", name: "Jeanne Rakotobe", city: "Ankarana", region: "DIANA", status: "Actif", since: "2023", specialty: "Vanille noire gourmet" },
  { id: "EXP-136", name: "Ravoahangy Razanadrakoto", city: "Antsohihy", region: "SOFIA", status: "En attente", since: "2016", specialty: "Vanille bio" },
  { id: "EXP-137", name: "Razafindramanga Ravalomanana", city: "Anjozorobe", region: "Analamanga", status: "Actif", since: "2015", specialty: "Vanille fendue" },
  { id: "EXP-138", name: "Rakoto Rakotoarisoa", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2025", specialty: "Vanille noire gourmet" },
  { id: "EXP-139", name: "Ravalomanana Rasoloniaina", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2024", specialty: "Vanille rouge" },
  { id: "EXP-140", name: "Ravalomanana Rabeasimbola", city: "Betroka", region: "Anosy", status: "Actif", since: "2016", specialty: "Vanille noire et rouge" },
  { id: "EXP-141", name: "Nicole Rakotondrazaka", city: "Sambava", region: "SAVA", status: "Actif", since: "2018", specialty: "Vanille cuts" },
  { id: "EXP-142", name: "Louis Razafindrakoto", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2019", specialty: "Vanille verte preparee" },
  { id: "EXP-143", name: "Lucie Ravelonjanahary", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2022", specialty: "Vanille noire gourmet" },
  { id: "EXP-144", name: "Nicole Rasolonjato", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2011", specialty: "Vanille noire et rouge" },
  { id: "EXP-145", name: "Razanadrakoto Rabemananjara", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2012", specialty: "Vanille bio" },
  { id: "EXP-146", name: "Razanadrakoto Randrianantenaina", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2015", specialty: "Vanille verte preparee" },
  { id: "EXP-147", name: "Raveloarisoa Rakotobe", city: "Betroka", region: "Anosy", status: "En attente", since: "2015", specialty: "Vanille TK" },
  { id: "EXP-148", name: "Rasolonjatovo Rasolonjato", city: "Andapa", region: "SAVA", status: "Suspendu", since: "2025", specialty: "Vanille premium" },
  { id: "EXP-149", name: "Rakotondrasoa Ramaroson", city: "Ankarana", region: "DIANA", status: "Actif", since: "2015", specialty: "Vanille premium" },
  { id: "EXP-150", name: "Randrianantenaina Rasolonjato", city: "Analalava", region: "SOFIA", status: "Actif", since: "2022", specialty: "Vanille fendue" },
  { id: "EXP-151", name: "Claire Ravalomanana", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2020", specialty: "Vanille rouge" },
  { id: "EXP-152", name: "Berthe Rakotoarisoa", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2024", specialty: "Vanille noire et rouge" },
  { id: "EXP-153", name: "Rakotomalala Andriamanjato", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2025", specialty: "Vanille verte preparee" },
  { id: "EXP-154", name: "Randrianarison Randrianantenaina", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2019", specialty: "Vanille verte preparee" },
  { id: "EXP-155", name: "Philippe Rabe", city: "Andapa", region: "SAVA", status: "Suspendu", since: "2017", specialty: "Vanille cuts" },
  { id: "EXP-156", name: "Josette Rakotoarisoa", city: "Ambilobe", region: "DIANA", status: "Actif", since: "2012", specialty: "Vanille bio" },
  { id: "EXP-157", name: "Lucie Rakotomalala", city: "Antsohihy", region: "SOFIA", status: "Actif", since: "2014", specialty: "Vanille verte preparee" },
  { id: "EXP-158", name: "Ratsimandrava Rakotomalala", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2023", specialty: "Vanille verte preparee" },
  { id: "EXP-159", name: "Rakotobe Razafindramanga", city: "Mananara Nord", region: "Analanjirofo", status: "Actif", since: "2022", specialty: "Vanille bio" },
  { id: "EXP-160", name: "Henri Randrianantenaina", city: "Betioy", region: "Atsimo-Andrefana", status: "Actif", since: "2023", specialty: "Vanille premium" },
  { id: "EXP-161", name: "Rakotovao Rakotoarisoa", city: "Betroka", region: "Anosy", status: "Actif", since: "2019", specialty: "Vanille TK" },
  { id: "EXP-162", name: "Georges Rakotobe", city: "Andapa", region: "SAVA", status: "Actif", since: "2021", specialty: "Vanille premium" },
  { id: "EXP-163", name: "Claire Ramaroson", city: "Ankarana", region: "DIANA", status: "En attente", since: "2017", specialty: "Vanille TK" },
  { id: "EXP-164", name: "Ravalomanana Rakotovao", city: "Analalava", region: "SOFIA", status: "Actif", since: "2025", specialty: "Vanille noire et rouge" },
  { id: "EXP-165", name: "Razafindramanga Rajoelisolo", city: "Anjozorobe", region: "Analamanga", status: "Suspendu", since: "2025", specialty: "Vanille noire" },
  { id: "EXP-166", name: "Yvonne Randrianampoinimerina", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2013", specialty: "Vanille verte preparee" },
  { id: "EXP-167", name: "Colette Razafindramanga", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2014", specialty: "Vanille noire et rouge" },
  { id: "EXP-168", name: "Georges Rajoelina", city: "Betroka", region: "Anosy", status: "Actif", since: "2018", specialty: "Vanille premium" },
  { id: "EXP-169", name: "Raveloarisoa Ravalomanana", city: "Andapa", region: "SAVA", status: "En attente", since: "2022", specialty: "Vanille premium" },
  { id: "EXP-170", name: "Nicole Andriamampianina", city: "Ankarana", region: "DIANA", status: "Actif", since: "2017", specialty: "Vanille noire gourmet" },
  { id: "EXP-171", name: "Albert Razanajaona", city: "Port-Berge", region: "SOFIA", status: "Suspendu", since: "2013", specialty: "Vanille verte preparee" },
  { id: "EXP-172", name: "Randrianantenaina Rakotonirina", city: "Antananarivo", region: "Analamanga", status: "En attente", since: "2011", specialty: "Vanille premium" },
  { id: "EXP-173", name: "Ratsimandrava Rasamimanana", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2014", specialty: "Vanille bio" },
  { id: "EXP-174", name: "Sylvie Andrianampoinimerina", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2015", specialty: "Vanille cuts" },
  { id: "EXP-175", name: "Ravoahangy Andrianarivelo", city: "Fort-Dauphin", region: "Anosy", status: "Actif", since: "2017", specialty: "Vanille verte preparee" },
  { id: "EXP-176", name: "Ravalomanana Razafindramanga", city: "Antalaha", region: "SAVA", status: "Actif", since: "2024", specialty: "Vanille noire gourmet" },
  { id: "EXP-177", name: "Lucie Rasoloniaina", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2015", specialty: "Vanille rouge" },
  { id: "EXP-178", name: "Rajaonarimampianina Randrianampoinimerina", city: "Analalava", region: "SOFIA", status: "Actif", since: "2023", specialty: "Vanille noire gourmet" },
  { id: "EXP-179", name: "Rafalimanana Andrianasolo", city: "Anjozorobe", region: "Analamanga", status: "Suspendu", since: "2025", specialty: "Vanille rouge" },
  { id: "EXP-180", name: "Rakotonirina Rakotoniary", city: "Fenoarivo Atsinanana", region: "Analanjirofo", status: "Actif", since: "2019", specialty: "Vanille noire gourmet" },
  { id: "EXP-181", name: "Razafindramanga Ratsimandrava", city: "Toliara", region: "Atsimo-Andrefana", status: "Actif", since: "2011", specialty: "Vanille TK" },
  { id: "EXP-182", name: "Suzanne Rasoloniaina", city: "Betroka", region: "Anosy", status: "Actif", since: "2017", specialty: "Vanille TK" },
  { id: "EXP-183", name: "Rajoelina Rasamoela", city: "Vohemar", region: "SAVA", status: "Actif", since: "2018", specialty: "Vanille cuts" },
  { id: "EXP-184", name: "Rakotoniaina Rajoelisolo", city: "Antsiranana", region: "DIANA", status: "Actif", since: "2024", specialty: "Vanille noire" },
  { id: "EXP-185", name: "Rajoelina Randrianarisoa", city: "Mampikony", region: "SOFIA", status: "Actif", since: "2019", specialty: "Vanille premium" },
  { id: "EXP-186", name: "Andrianasolo Rasolonjatovo", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2021", specialty: "Vanille fendue" },
  { id: "EXP-187", name: "Rakotovao Razafindrakoto", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2025", specialty: "Vanille noire gourmet" },
  { id: "EXP-188", name: "Patrick Razafindramanga", city: "Ankazoabo", region: "Atsimo-Andrefana", status: "Suspendu", since: "2014", specialty: "Vanille bio" },
  { id: "EXP-189", name: "Rasolofonirina Andrianampoinimerina", city: "Betroka", region: "Anosy", status: "Suspendu", since: "2021", specialty: "Vanille rouge" },
  { id: "EXP-190", name: "Pierre Rabeasimbola", city: "Andapa", region: "SAVA", status: "Actif", since: "2024", specialty: "Vanille premium" },
  { id: "EXP-191", name: "Rakotomalala Andrianarivelo", city: "Ambilobe", region: "DIANA", status: "En attente", since: "2021", specialty: "Vanille rouge" },
  { id: "EXP-192", name: "Rose Rabe", city: "Port-Berge", region: "SOFIA", status: "Actif", since: "2020", specialty: "Vanille TK" },
  { id: "EXP-193", name: "Andriamanjato Rajoelina", city: "Antananarivo", region: "Analamanga", status: "Actif", since: "2024", specialty: "Vanille noire gourmet" },
  { id: "EXP-194", name: "Rasamoelina Rakotomalala", city: "Soanierana-Ivongo", region: "Analanjirofo", status: "Actif", since: "2011", specialty: "Vanille noire gourmet" },
  { id: "EXP-195", name: "Patrick Razanadrakoto", city: "Ampanihy", region: "Atsimo-Andrefana", status: "Actif", since: "2014", specialty: "Vanille noire et rouge" },
  { id: "EXP-196", name: "Rasoloniaina Rakotoarivelo", city: "Amboasary", region: "Anosy", status: "En attente", since: "2023", specialty: "Vanille TK" },
  { id: "EXP-197", name: "Andrianasolo Rajoelisolo", city: "Antalaha", region: "SAVA", status: "Actif", since: "2025", specialty: "Vanille TK" },
  { id: "EXP-198", name: "Harison Andriamampianina", city: "Ankarana", region: "DIANA", status: "Actif", since: "2016", specialty: "Vanille verte preparee" },
  { id: "EXP-199", name: "Razafimahatratra Rafalimanana", city: "Analalava", region: "SOFIA", status: "Actif", since: "2021", specialty: "Vanille fendue" },
  { id: "EXP-200", name: "Ravalomanana Rasamoelina", city: "Manjakandriana", region: "Analamanga", status: "Actif", since: "2016", specialty: "Vanille rouge" }
]

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  Actif: { bg: "rgba(46,77,58,0.15)", text: "#2E4D3A" },
  "En attente": { bg: "rgba(184,153,71,0.15)", text: "#B89947" },
  Suspendu: { bg: "rgba(220,50,50,0.1)", text: "#DC3232" },
}

export default function Exporters() {
  const t = useTranslation()
  const e = t.exporters
  const [search, setSearch] = useState("")
  const [regionFilter, setRegionFilter] = useState("Tous")

  const filtered = EXPORTERS.filter((x) => {
    const m = x.name.toLowerCase().includes(search.toLowerCase()) || x.city.toLowerCase().includes(search.toLowerCase())
    return m && (regionFilter === "Tous" || x.region === regionFilter)
  })

  return (
    <div className="animate-fade-in">
      <section className="border-b py-16 sm:py-20" style={{ backgroundColor: "var(--avm-bg)", borderColor: "var(--avm-border)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "var(--avm-fg)" }}><span className="text-gradient-gold">Exportateurs</span> agréés</h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--avm-fg-muted)" }}>{e.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="avm-section" style={{ backgroundColor: "var(--avm-bg)" }}>
        <div className="avm-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 rounded-2xl border p-5 sm:p-6" style={{ borderColor: "var(--avm-border)" }}>
              <div className="flex items-center gap-2 mb-3"><Award className="h-5 w-5 text-[#B89947]" /><h2 className="text-base font-semibold" style={{ color: "var(--avm-fg)" }}>{e.standardsTitle}</h2></div>
              <p className="text-sm" style={{ color: "var(--avm-fg-muted)" }}>{e.standardsDesc}</p>
            </div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "var(--avm-fg-subtle)" }} />
                <input type="text" placeholder={e.searchPlaceholder} value={search} onChange={(ev) => setSearch(ev.target.value)} className="w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none" style={{ borderColor: "var(--avm-border)", backgroundColor: "var(--avm-bg)", color: "var(--avm-fg)" }} />
              </div>
              <div className="flex gap-2">
                {["Tous", "DIANA", "SOFIA"].map((r) => (
                  <button key={r} onClick={() => setRegionFilter(r)} className={`rounded-lg px-4 py-2.5 text-xs font-medium ${regionFilter === r ? "bg-[#2E4D3A] text-white" : "border hover:bg-black/5"}`} style={regionFilter !== r ? { borderColor: "var(--avm-border)", color: "var(--avm-fg-muted)" } : undefined}>{r}</button>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--avm-border)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead><tr style={{ backgroundColor: "var(--muted)" }}>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>ID</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Nom</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Ville</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Région</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Spécialité</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Depuis</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: "var(--avm-fg)" }}>Statut</th>
                  </tr></thead>
                  <tbody>
                    {filtered.map((ex, i) => (
                      <tr key={ex.id} className="transition-colors" style={{ borderTop: "1px solid", borderColor: "var(--avm-border)", backgroundColor: i % 2 === 0 ? "var(--avm-bg)" : "var(--muted)" }}>
                        <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--avm-fg-subtle)" }}>{ex.id}</td>
                        <td className="px-4 py-3 font-medium" style={{ color: "var(--avm-fg)" }}>{ex.name || <span className="italic text-[var(--avm-fg-subtle)]">—</span>}</td>
                        <td className="px-4 py-3" style={{ color: "var(--avm-fg-muted)" }}>{ex.city}</td>
                        <td className="px-4 py-3" style={{ color: "var(--avm-fg-muted)" }}>{ex.region}</td>
                        <td className="px-4 py-3" style={{ color: "var(--avm-fg-muted)" }}>{ex.specialty}</td>
                        <td className="px-4 py-3" style={{ color: "var(--avm-fg-muted)" }}>{ex.since}</td>
                        <td className="px-4 py-3"><span className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: STATUS_STYLES[ex.status].bg, color: STATUS_STYLES[ex.status].text }}>{ex.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filtered.length === 0 && <div className="px-4 py-12 text-center"><p className="text-sm" style={{ color: "var(--avm-fg-subtle)" }}>{e.emptyMessage}</p></div>}
            </div>
            <p className="mt-4 text-center text-xs" style={{ color: "var(--avm-fg-subtle)" }}>{filtered.length} exportateur{filtered.length > 1 ? "s" : ""}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
