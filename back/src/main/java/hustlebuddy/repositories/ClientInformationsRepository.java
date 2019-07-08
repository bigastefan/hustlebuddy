package hustlebuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hustlebuddy.models.ClientInformations;

@Repository
public interface ClientInformationsRepository extends JpaRepository<ClientInformations, Long> {

}
