package hustlebuddy.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hustlebuddy.models.AccountData;

@Repository
public interface AccountDataRepository extends JpaRepository<AccountData, Long> {

	Optional<AccountData> findByUsername (String username);
}
