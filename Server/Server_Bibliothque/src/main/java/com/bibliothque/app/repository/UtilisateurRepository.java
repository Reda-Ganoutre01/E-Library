package com.bibliothque.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bibliothque.app.model.Utilisateur;

public interface UtilisateurRepository extends JpaRepository <Utilisateur,Long> {

}
