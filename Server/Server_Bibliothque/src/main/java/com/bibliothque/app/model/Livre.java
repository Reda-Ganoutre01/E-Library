package com.bibliothque.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Livre {

    @Id
    private Long idLivre;
    private String titre;
    private String auteur;
    private String catégorie;
    private String datePublication;
    private String resume;
    private String disponibilite;
    private int nombre_copies_disponibles;
    private String imageUrl; 

    public Long getIdLivre() {
        return this.idLivre;
    }

    public void setIdLivre(Long idLivre) {
        this.idLivre = idLivre;
    }

    public String getTitre() {
        return this.titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return this.auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getCatégorie() {
        return this.catégorie;
    }

    public void setCatégorie(String catégorie) {
        this.catégorie = catégorie;
    }

    public String getDatePublication() {
        return this.datePublication;
    }

    public void setDatePublication(String datePublication) {
        this.datePublication = datePublication;
    }

    public String getResume() {
        return this.resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getDisponibilite() {
        return this.disponibilite;
    }

    public void setDisponibilite(String disponibilite) {
        this.disponibilite = disponibilite;
    }

    public int getNombre_copies_disponibles() {
        return this.nombre_copies_disponibles;
    }

    public void setNombre_copies_disponibles(int nombre_copies_disponibles) {
        this.nombre_copies_disponibles = nombre_copies_disponibles;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    
}
