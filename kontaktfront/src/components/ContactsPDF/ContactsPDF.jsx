import React, { useEffect, useState } from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import api from "../../services/api";
import logopdf from "../../assets/logopdf.png";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    marginBottom: 5,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 30,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
function MyDocument() {
  const [contacts, setContacts] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("Kontakt@token")) || ""
  );

  const [id] = useState(JSON.parse(localStorage.getItem("id")) || "");

  const loadContacts = () => {
    api
      .get(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => "Erro de conexão.");
  };

  useEffect(() => loadContacts(), []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header} fixed>
          Contatos
        </Text>
        <Image style={styles.image} src={logopdf} />
        {contacts &&
          contacts.map((contact, index) => {
            return (
               <>
                <Text>Cliente:{contact.name}{'\n'}
                E-mail:{contact.email}{'\n'}
                Contato:{contact.telephone}{'\n\n'}</Text>
                </>
            );
          })}
          <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}

export default MyDocument;
